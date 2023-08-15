import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ApplycomplaintServicesService {

  constructor(private db: AngularFireDatabase) { }

  applyComplaint(data:any){
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
}
