import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplycomplaintServicesService {

  lastComplaintId = 0

  constructor(private db: AngularFireDatabase) {
   this.getlastdata()
   }
  GetStudentsList(): Observable<any[]> {
    return this.db.list('students-complaint').valueChanges();
  }


  applyComplaint(data: any) {
    data.complaintId = this.lastComplaintId + 1;
    console.log("Complaint submitted", data)

    const complaint = this.db.list('students-complaint');
    return new Promise<void>((resolve, reject) => {
      complaint.push(data)
        .then(() => {
          // Alert when student is added
          window.alert('complaint applied succesfully!');
          resolve();
        })
        .catch(error => {
          console.error('Error while applying complaint:', error);
          reject(error);
        });
    });
  }

  getlastdata() {
    const studentsRef = this.db.list('students-complaint', ref =>
      ref.orderByChild('submitted_at').limitToLast(1)
    );

    studentsRef.snapshotChanges().subscribe(data => {
      if (data.length > 0) {
        const lastAddedStudent:any = data[0].payload.val();
        this.lastComplaintId = lastAddedStudent.complaintId

        console.log('Last added student:', lastAddedStudent);
      }else{
        this.lastComplaintId = 0

      }
    });

  }

}
