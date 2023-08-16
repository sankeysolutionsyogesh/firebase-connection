import { Component } from '@angular/core';
import { LoginDataService } from 'src/services/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginError: boolean = false;

  constructor(private snackBar: MatSnackBar,private loginService : LoginDataService, private router: Router){}

  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      // Successful login action, navigate or perform actions here
      const token = "sdkfhsodhfoshfiscs23432"
      this.loginService.setToken(token, 'Admin')
      this.router.navigate(['admin'])

    } else {
      // Display error message
      this.snackBar.open('Invalid username or password', 'Close', {
        duration: 3000 // Show the error message for 3 seconds
      });
    }
  }

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
    //     this.router.navigate(['admin']);
    //     this.loginError = false;
    //   })
    //   .catch((error) => {
    //     console.log('Error:', error);
    //     this.loginError = true;

    //   });
  }

  ngOnInit():void{
  
    const role = this.loginService.getRole()
    console.log("User deatils",role)
    if(role === 'Admin'){
      this.router.navigate(['admin'])
    }else if (role === 'Student'){
      this.router.navigate(['student'])

    }else{
      console.log("Not logged")
    }
   
  } 
}
