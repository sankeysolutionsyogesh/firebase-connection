import { Component } from '@angular/core';
import { StudentdataService } from '../studentmodal-services/studentdata.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  loading: boolean = true;

  role: string = "Student"
  myInfo: any = {}
  constructor(private studentinfo: StudentdataService, private router: Router) {
    this.checkStudentData()
  }

  checkStudentData(): void {
    this.getStudentData()
      .pipe(
        switchMap(myInfo => this.studentinfo.getStudentByEmail(myInfo?.profile.email))
      )
      .subscribe(
        (data: any) => {
          if (data.length > 0) {
            console.log("Congratulations ");
            this.myInfo = data[0]
            this.loading = false;
            return true
          } else {
            this.router.navigate(['unathorised']);
            return false;
          }
        },
        error => {
          console.error("Error occurred:", error);
        }
      );
  }
  getStudentData(): Observable<any> {
    return Observable.create((observer: any) => {
      const myInfo = this.studentinfo.getStudentData();
      observer.next(myInfo);
      observer.complete();
    });

  }
}
