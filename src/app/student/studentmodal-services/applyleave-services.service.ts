import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ApplyleaveServicesService {

  constructor(private db: AngularFireDatabase) { }

  applyforleave(data:any){
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
}
