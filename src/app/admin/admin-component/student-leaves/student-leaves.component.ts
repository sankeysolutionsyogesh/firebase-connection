import { Component } from '@angular/core';
import { StudentServiceService } from '../../admimn-services/student-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SinglecomplaintComponent } from '../singlecomplaint/singlecomplaint.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-leaves',
  templateUrl: './student-leaves.component.html',
  styleUrls: ['./student-leaves.component.css']
})
export class StudentLeavesComponent {

  StudentLeaves: any[] = [];

  displayedColumns: string[] = ['sname','room_number', 'sdate', 'edate', 'actions'];

  constructor(private datePipe: DatePipe, private route: ActivatedRoute,private studentservice: StudentServiceService, private _snackBar: MatSnackBar, public dialog: MatDialog, private router: Router) {
    this.getStudentseleaves()
  }
  formatDateWithDay(date: any): string {
    const formattedDate = this.datePipe.transform(date, 'dd-MMM-YYYY');
    const dayOfWeek = this.datePipe.transform(date, 'EEEE'); // EEEE gives full day name

    return `${formattedDate} (${dayOfWeek})`;
  }


  getStudentseleaves() {
    this.studentservice.getStudentsleaves().subscribe(data => {
      this.StudentLeaves = data;
      console.log("leaves", data)
    });
  }

  ViewSingle(id:number){
    this.router.navigate(['../view-leave', id], { relativeTo: this.route });
  }


}
