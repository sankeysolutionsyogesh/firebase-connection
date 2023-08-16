import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { LoginDataService } from 'src/services/login-service.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {
  counter: number = 5;
  private countdownSubscription: Subscription | undefined;

  constructor(private loginService: LoginDataService) {
    this.startCountdown();
  }


  ngOnDestroy() {
    this.countdownSubscription?.unsubscribe();
  }

  startCountdown() {
    this.countdownSubscription = interval(1000).subscribe(() => {
      this.counter--;
      if (this.counter === 0) {
        this.loginService.logout()
        this.countdownSubscription?.unsubscribe();
      }
    });
  }
}
