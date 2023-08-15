import { Component } from '@angular/core';
import { StudentServiceService } from '../../admimn-services/student-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  StudentList: any= []
  removeAddStudentPage: any = false;

  constructor(private studentservice: StudentServiceService){
    this.studentservice.GetStudentsList().subscribe(data => {
      this.StudentList = data;
      console.log("data", data)
    });
  }
  
}
