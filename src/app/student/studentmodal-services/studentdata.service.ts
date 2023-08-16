import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentdataService {


  constructor(private db: AngularFireDatabase) {
    const emailToSearch = 'yogeshkunkawlekar12@gmail.com'; // Replace with the email you want to search for
    const data = this.getStudentData()

    this.getUserByEmail(data?.profile.email).subscribe(data => {
      this.setdatabaseUser(data)
    });
  }

  getStudentData() {
    const data: any = localStorage.getItem('user')
    return JSON.parse(data);
  }

  getUserByEmail(email: string): Observable<any[]> {
    const studentsRef = this.db.list('students-list', ref =>
      ref.orderByChild('student_email').equalTo(email)
    );

    return studentsRef.valueChanges(); // This will return an Observable of the queried data
  }
  setdatabaseUser(data: any) {
    localStorage.setItem('myInfo', JSON.stringify(data));
  }

  getdatabaseUser() {
    const data: any = localStorage.getItem('myInfo')
    const data1 =  JSON.parse(data);
    return data1[0]
  }
}
