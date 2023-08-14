import { Component } from '@angular/core';
import { LoginDataService } from 'src/services/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private loginService : LoginDataService, private router: Router){}

  LoginGoogle(){
    const result =  this.loginService.LoginGooglePopUP()
   
  }

  loginForAdmin(): void {
    const data = {
      username: this.username,
      password: this.password
    }


    // this.loginService.LoginApi(data)
    //   .then((response) => {
    //     console.log(response)
    //     this.router.navigate(['home']);
    //     this.loginError = false;
    //   })
    //   .catch((error) => {
    //     console.log('Error:', error);
    //     this.loginError = true;

    //   });
  }

  ngOnInit():void{
    console.log("User deatils",this.loginService.getloggedDetails())

    if(this.loginService.isLoggedIn()){
      this.router.navigate(['home'])
    }
  } 
}
