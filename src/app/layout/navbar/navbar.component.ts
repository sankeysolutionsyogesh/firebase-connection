import { Component, Input } from '@angular/core';
import { LoginDataService } from 'src/services/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    @Input() pagesRoutes:any = [];
    @Input() titlename:string  | undefined = "";
    @Input() role:string = "";

    
    constructor(private loginService : LoginDataService, private router: Router){}

    logout(){
      this.loginService.logout()
    }
}
