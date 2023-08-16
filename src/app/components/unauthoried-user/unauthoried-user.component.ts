import { Component } from '@angular/core';
import { LoginDataService } from 'src/services/login-service.service';

@Component({
  selector: 'app-unauthoried-user',
  templateUrl: './unauthoried-user.component.html',
  styleUrls: ['./unauthoried-user.component.css']
})
export class UnauthoriedUserComponent {
  constructor(private loginService: LoginDataService) {
  }

  logoutbutton(){
    this.loginService.logout()
  }

}
