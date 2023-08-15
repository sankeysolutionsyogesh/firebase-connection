import { Component } from '@angular/core';
import { StudentServiceService } from '../../admimn-services/student-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SinglecomplaintComponent } from '../singlecomplaint/singlecomplaint.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-complaint',
  templateUrl: './student-complaint.component.html',
  styleUrls: ['./student-complaint.component.css']
})
export class StudentComplaintComponent {

  StudentComplaints: any[] = [];

  displayedColumns: string[] = ['rname', 'type', 'severity', 'actions'];

  constructor(private studentservice: StudentServiceService, private _snackBar: MatSnackBar, public dialog: MatDialog) {
    this.getComplaintAction()
  }

  getComplaintAction() {
    this.studentservice.GetStudentsComplaints().subscribe(data => {
      this.StudentComplaints = data;
      console.log("data", data)
    });
  }

  ViewSingle(singleComplaint:any){
    this.openDialog(singleComplaint)
  }

  openDialog(Complaint: any): void {
    const dialogRef = this.dialog.open(SinglecomplaintComponent, {
      width: '350px',
      data: Complaint
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // if(result){
      //   alert(":sdfosdhofh")
      // }
    });
  }
}

