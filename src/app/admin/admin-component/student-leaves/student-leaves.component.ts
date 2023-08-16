import { Component } from '@angular/core';
import { StudentServiceService } from '../../admimn-services/student-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SinglecomplaintComponent } from '../singlecomplaint/singlecomplaint.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-leaves',
  templateUrl: './student-leaves.component.html',
  styleUrls: ['./student-leaves.component.css']
})
export class StudentLeavesComponent {

  StudentLeaves: any[] = [];

  displayedColumns: string[] = ['lid','sname', 'sdate', 'edate', 'actions'];

  constructor( private route: ActivatedRoute,private studentservice: StudentServiceService, private _snackBar: MatSnackBar, public dialog: MatDialog, private router: Router) {
    this.getStudentseleaves()
  }

  getStudentseleaves() {
    this.studentservice.getStudentsleaves().subscribe(data => {
      this.StudentLeaves = data;
      console.log("leaves", data)
    });
  }

  ViewSingle(id:number){
    this.router.navigate(['/home/viewleave', id]);
  }

}
