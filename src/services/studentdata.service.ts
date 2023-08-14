import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  constructor(private db: AngularFireDatabase) { }
 
  getStudentDetailsByID(user:any){
    return this.db.object(user);
  }

  getAllStudents(){
    return this.db.list('students').valueChanges();
  }

  addStudent(studentData: any): Promise<void> {
    const studentsRef = this.db.list('students');
    
    return new Promise((resolve, reject) => {
      studentsRef.push(studentData)
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
}
