import { Component } from '@angular/core';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent {
  pagesRoutes = [
    { label: 'Apply Complaint', link: './apply-complaint' },
    { label: 'Apply Leave', link: './apply-leave' },
  ];
}
