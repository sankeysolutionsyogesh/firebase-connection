import { Component } from '@angular/core';
import { StudentdataService } from '../studentmodal-services/studentdata.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent {
  pagesRoutes = [
    { label: 'Apply Complaint', link: './apply-complaint' },
    { label: 'Apply Leave', link: './apply-leave' },
  ];

  role:string = "Student"
  myInfo: any = []
  constructor(private studentinfo : StudentdataService){
    this.myInfo = this.studentinfo.getStudentData()
  }


}
