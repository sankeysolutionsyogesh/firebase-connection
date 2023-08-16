import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { StudentdataService } from '../studentmodal-services/studentdata.service';


@Injectable({
  providedIn: 'root'
})
export class ApplyleaveServicesService {

  myInfo: any = []
  lastComplaintId = 0

  constructor(private db: AngularFireDatabase, private studentinfo : StudentdataService) {
    this.myInfo = this.studentinfo.getdatabaseUser()
   }

  applyforleave(data:any){
    data.student_email = this.myInfo.student_email;
    data.student_name  = this.myInfo.student_name;
    data.room_number  = this.myInfo.room_number;
    data.status  = false;
    data.leaveId = this.lastComplaintId + 1

    const leave = this.db.list('students-leave');
    return new Promise<void>((resolve, reject) => {
      leave.push(data)
        .then(() => {
          // Alert when student is added
          window.alert('Leave applied succesfully!');
          resolve();
        })
        .catch(error => {
          console.error('Error while applying leave:', error);
          reject(error);
        });
    });
  }

  getlastdata() {
    const studentsRef = this.db.list('students-leave', ref =>
      ref.orderByChild('applied_at').limitToLast(1)
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
