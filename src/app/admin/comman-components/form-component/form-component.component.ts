import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentServiceService } from '../../admimn-services/student-service.service';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  formData = {
    feesPaid: 0.0,
    isPaid: false,
    selectedDate: ""
  };
  constructor(private studentservice: StudentServiceService,) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;

      const data = {
        student_name: form.value.studentName,
        gender: form.value.gender,
        room_number: parseInt(form.value.roomNumber),
        fees_paid: parseInt(form.value.feesPaid),
      };

      console.log("formdata", data)


      try {
        this.studentservice.registerStudent(data)
          .then(() => {
            console.log('Student registered successfully!');
            form.resetForm(); 
          })
          .catch((error) => {
            console.error('Error registering student:', error);
          });
      }
      catch (err) {
        console.log("error in post API", err)

      }

    }
  }


  limitFeePaid(event: any) {
    this.formData.feesPaid = parseFloat(event.target.value);
    this.formData.isPaid = this.formData.feesPaid > 0;
  }

  limitRoomNumbert(event: any) {
    const maxLength = 6;
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
  }


  resetForm(form: NgForm) {
    form.resetForm(); // Reset the form
    // this.apiErrorMessage = 'API Error:'
    // console.log(this.apiErrorMessage)
    // You can also reset other properties if needed
  }
}
