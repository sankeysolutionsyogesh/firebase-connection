import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDataService } from 'src/services/login-service.service';
import { StudentdataService } from 'src/services/studentdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  studentsList$: Observable<any[]>;



  constructor(private loginService: LoginDataService, private studentService: StudentdataService) { 
    this.studentsList$ = this.studentService.getAllStudents()
    console.log(this.studentsList$)
  }

  LogoutUser() {
    this.loginService.logout()
  }

  ngOnInit() {
    console.log("User deatils", this.loginService.getloggedDetails())
  }

 

}
