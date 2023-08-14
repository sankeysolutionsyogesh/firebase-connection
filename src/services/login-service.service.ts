import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { StudentdataService } from './studentdata.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class LoginDataService {


  private LoggedUser: boolean = false
  private LoggedUserDetails: any = [];

  constructor(private authService: AuthService, private router: Router, private studentService: StudentdataService, private db: AngularFireDatabase) { }


  LoginGooglePopUP() {
    this.authService.signInWithgoogle()
      .then((res: any) => {
        console.log("Sucecs", res)
        const idToken = res?.credential.idToken;
        if (idToken) {
          this.setToken(idToken)
          console.log(res.additionalUserInfo)

          const additionalUserInfo = res.additionalUserInfo;

          if (additionalUserInfo && additionalUserInfo.providerId === 'google.com') {

            const profile = additionalUserInfo.profile;
            const isNewUser = additionalUserInfo.isNewUser;

            this.setloggedDetails(additionalUserInfo)

            const data = {
              details: profile,
              role: 'Student'
            }

            this.db.object(`students/details/${profile.id}`).valueChanges().subscribe((studentData: any) => {
              if (studentData) {
                // Do something with the retrieved student data
                
                console.log(studentData);
              } else {
                this.studentService.addStudent(data)
                console.log('Student not found');
              }
            });
            


            // console.log("All details ", additionalUserInfo)
            console.log("Google Profile:", profile.id);
            // console.log("Is New User?", isNewUser);
          }
          // this.setloggedDetails(res.additionalUserInfo)
          this.router.navigate(['home']);
          return true;
        } else {
          return false
        }
      })
      .catch((eror) => {
        console.log("Error", eror)
        return false;
      })
  }


  getUserLog(): boolean {
    return this.LoggedUser
  }

  getloggedDetails(): any {
    const data: any = localStorage.getItem('user')
    return JSON.parse(data);
  }

  setloggedDetails(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}