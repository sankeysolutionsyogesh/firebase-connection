import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ApplyleaveServicesService } from '../studentmodal-services/applyleave-services.service';
import * as moment from 'moment';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  leaveForm: FormGroup;
  range: FormGroup; // FormGroup for the date range
  loading = false;

  constructor(private fb: FormBuilder, private applyleaveservice: ApplyleaveServicesService) {
    this.leaveForm = this.fb.group({

      reason: ['', Validators.required],
      relativeName: ['', [Validators.required, Validators.pattern(/^[\p{L} ]+$/u)]],
      relativeContact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      // Other fields...
    });

    this.range = this.fb.group({
      start: [null, Validators.required],
      end: [null, Validators.required]
    });

  }


  submitForm() {
    if (this.leaveForm.valid) {
      if (this.range.valid) {

        const mstartDate = moment(this.range.value.start);
        const mendDate = moment(this.range.value.end);



        const startDate = mstartDate.format('MM/DD/YYYY');
        const endDate = mendDate.format('MM/DD/YYYY');


        // Process the form data
        this.loading = true;
        const data = {

          startDate, endDate, ...this.leaveForm.value, applied_at : new Date().toISOString()

        }
        console.log(data);

        try {
          this.applyleaveservice.applyforleave(data)
            .then(() => {
              console.log('Student registered successfully!');
              this.loading = false;
              this.leaveForm.reset();
              this.range.reset();
              this.resetform()
            })
            .catch((error) => {
              console.error('Error registering student:', error);
            });
        }
        catch (err) {
          console.log("error in post API", err)

        }
      }
      else {
        alert("Select dates properly")
      }
      // You can perform additional actions like submitting the form to a backend server
    }
    else {
      alert("Fill all the fields.")
    }
  }

  resetform() {
    this.leaveForm.setValue({
      // Set your initial values for each form control
      relativeName: '',
      relativeContact: '',
      // ... Other form controls ...
    });

    this.range.setValue({
      start: null,
      end: null
    });

  }

}
