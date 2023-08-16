import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  
  pagesRoutes = [
    { label: 'Departments', link: '../department' },
    { label: 'Employees', link: './employee' },
    { label: 'Student', link: './student' }
  ];

  role="Admin"
  
}
