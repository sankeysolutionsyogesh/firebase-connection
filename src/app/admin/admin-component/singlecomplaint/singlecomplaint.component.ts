import { Component , Inject} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentComplaintComponent } from '../student-complaint/student-complaint.component';



@Component({
  selector: 'app-singlecomplaint',
  templateUrl: './singlecomplaint.component.html',
  styleUrls: ['./singlecomplaint.component.css']
})
export class SinglecomplaintComponent {

  constructor(
    public dialogRef: MatDialogRef<StudentComplaintComponent>,
    @Inject(MAT_DIALOG_DATA) public Complaint: any,
  ) {
    console.log("StudentData", Complaint)
  }

  pageName = 'Edit'
  onNoClick(): void {
    this.dialogRef.close();
  }

}
