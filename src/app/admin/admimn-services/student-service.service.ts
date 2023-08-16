import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  totalStudents: any = null;
  lastSid: number = 0;

  constructor(private db: AngularFireDatabase) {
    this.getlastdata()
    this.GetStudentsList().subscribe(data => {
      this.totalStudents = data.length;
    });
  }

  GetStudentsList(): Observable<any[]> {
    return this.db.list('students-list').valueChanges();
  }

  getStudentsComplaint(): Observable<any[]> {
    return this.db.list('students-complaint').valueChanges();
  }

  getStudentsleaves(): Observable<any[]> {
    return this.db.list('students-leave').valueChanges();
  }

  getlastdata() {
    const studentsRef = this.db.list('students-list', ref =>
      ref.orderByChild('created_at').limitToLast(1)
    );

    studentsRef.snapshotChanges().subscribe(data => {
      if (data.length > 0) {
        const lastAddedStudent: any = data[0].payload.val();
        this.lastSid = lastAddedStudent.sid

        console.log('Last added student:', lastAddedStudent);
      }
    });

  }
  updateStudentStatus(id: any, Inputstatus:boolean) {
    console.log("Upodating", id)
    const studentsRef = this.db.list('students-leave', ref =>
      ref.orderByChild('leaveId').equalTo(id)
    );

    studentsRef.snapshotChanges().subscribe((snapshots) => {
      snapshots.forEach((snapshot) => {
        const key: any = snapshot.key;

        const updatedData = { status: Inputstatus }; // Update the status field to true

        studentsRef.update(key, updatedData)
          .then(() => {
            return { message: "Successfully updated status" };
          })
          .catch((error) => {
            return { message: `Error while updating status - ${error}` };
          });
      });
    });

  }



  registerStudent(data: any): Promise<void> {
    data.sid = this.lastSid + 1;
    const studentsRef = this.db.list('students-list');
    return new Promise<void>((resolve, reject) => {
      studentsRef.push(data)
        .then(() => {
          // Alert when student is added
          // window.alert('Student added successfully!');
          resolve();
        })
        .catch(error => {
          console.error('Error adding student:', error);
          reject(error);
        });
    });
  }

  getSingleLeaves(id: any) {
    const studentsRef = this.db.list('students-leave', ref =>
      ref.orderByChild('leaveId').equalTo(id)
    );

    return studentsRef.valueChanges();

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
