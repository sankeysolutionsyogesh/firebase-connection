import { Component, Input } from '@angular/core';
import { StudentServiceService } from '../../admimn-services/student-service.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  removeAddStudentPage: any = false;

  StudentList: any[] = [];
  displayedColumns: string[] = ['sid', 'student_name', 'room_number', 'gender', 'fees_paid', 'actions'];
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private studentservice: StudentServiceService, private _snackBar: MatSnackBar) {
    this.getStudentAction()
  }

  getStudentAction() {
    this.studentservice.GetStudentsList().subscribe(data => {
      this.StudentList = data;
      console.log("data", data)
    });
  }
  
  Deleteaction(id: number) {
    const result = this.studentservice.deleteStudent(id)
    this.getStudentAction()
    this.openSnackBar(result)
  }

  EditAction(data: any) {

  }

  openSnackBar(data: any) {
    this._snackBar.open(`${data.message}`, 'Thanks', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3 * 1000,
    });
  }
  Add_Student(){
    this.removeAddStudentPage = true;
  }

  View_Student(){
    this.removeAddStudentPage = false;

  }

}
