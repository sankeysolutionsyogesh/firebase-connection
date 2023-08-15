import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  totalStudents: any = null;

  constructor(private db: AngularFireDatabase) {
    this.GetStudentsList().subscribe(data => {
      this.totalStudents = data.length;
    });
  }

  GetStudentsList(): Observable<any[]> {
    return this.db.list('students-list').valueChanges();
  }

  GetStudentsComplaints(): Observable<any[]> {
    return this.db.list('students-complaint').valueChanges();
  }


  registerStudent(data: any): Promise<void> {
    data.sid = this.totalStudents + 1;
    const studentsRef = this.db.list('students-list');
    return new Promise<void>((resolve, reject) => {
      studentsRef.push(data)
        .then(() => {
          // Alert when student is added
          window.alert('Student added successfully!');
          resolve();
        })
        .catch(error => {
          console.error('Error adding student:', error);
          reject(error);
        });
    });
  }

  deleteStudent(id: any) {

    const studentsRef = this.db.list('students-list', ref =>
      ref.orderByChild('sid').equalTo(id)
    );

    studentsRef.snapshotChanges().subscribe((snapshots) => {
      snapshots.forEach((snapshot) => {
        const key: any = snapshot.key;

        studentsRef.remove(key)
          .then(() => {
            return { message: "Sucessfull deleted" }
          })
          .catch((error) => {
            return { message: `Error will deleting - ${error}` }
          });
      });
    });

  }
}
