import { Component, OnInit , ViewChild,  ElementRef, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ApplyleaveServicesService } from '../studentmodal-services/applyleave-services.service';
import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ApplycomplaintServicesService } from '../studentmodal-services/applycomplaint-services.service';

@Component({
  selector: 'app-apply-complaint',
  templateUrl: './apply-complaint.component.html',
  styleUrls: ['./apply-complaint.component.css']
})
export class ApplyComplaintComponent {
  complaintForm: FormGroup;
  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  loading = false;
  constructor(private formBuilder: FormBuilder, private storage: AngularFireStorage, private applycomplaintservice: ApplycomplaintServicesService, private renderer: Renderer2) {
    this.complaintForm = this.formBuilder.group({
      complaintType: ['', Validators.required],
      severity: ['', Validators.required],
      incidentLocation: ['', Validators.required],
      description: ['', Validators.required],
      attachments: [null]
    });
  }


  uploadImage(form: NgForm) {
    try {
      const file = this.complaintForm.value.attachments;
      console.log("File ", this.complaintForm.value.attachments)

      const filePath = `images/${file.name}`;

      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      task.then(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          console.log("URL ", downloadURL)
          this.uploadDetails(form, downloadURL)
          return downloadURL;


        });
      });
    }
    catch (Error) {
      console.log("File ", Error)

    }
  }

  uploadDetails(form: NgForm, downloadURL = null) {
    // Handle form submission here
    console.log('Type of Complaint:', form.value.compType);
    console.log('Severity Level:', form.value.severity);
    console.log('Location:', form.value.location);
    console.log('Relative Name:', form.value.relativename);
    console.log("filePath ", downloadURL)

    const data = {
      type: form.value.compType,
      severity: form.value.severity,
      location: form.value.location,
      rname: form.value.relativename,
      fileurl: downloadURL,
    }

    try {
      this.applycomplaintservice.applyComplaint(data)
        .then(() => {
          console.log('Student registered successfully!');
          this.loading = false;
          // this.leaveForm.reset();
          // this.range.reset();
          this.resetForm(form)
        })
        .catch((error) => {
          console.error('Error registering student:', error);
        });
    }
    catch (err) {
      console.log("error in post API", err)

    }


  }

  onSubmit(form: NgForm) {
    this.loading = true;


    if (this.complaintForm.value.attachments != null) {
      this.uploadImage(form)
    } else {
      this.uploadDetails(form)
    }

  }

  validateFileFormat(control: any) {
    if (control.value) {
      const file = control.value;
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        return { fileFormat: true };
      }
    }
    return null;
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.complaintForm.patchValue({
        attachments: file
      });
    }
  }

  resetForm(form: NgForm) {
    form.resetForm(); 
    this.renderer.setProperty(this.fileInput?.nativeElement, 'value', '');
  }
}

