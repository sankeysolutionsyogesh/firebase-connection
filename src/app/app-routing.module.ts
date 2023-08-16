import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from '../services/guards/auth.guard';
import { AdminHomeComponent } from './admin/admin-component/admin-home/admin-home.component';
import { StudentsComponent } from './admin/admin-component/students/students.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { ApplyComplaintComponent } from './student/apply-complaint/apply-complaint.component';
import { ApplyLeaveComponent } from './student/apply-leave/apply-leave.component';
import { ViewleavesComponent } from './admin/admin-component/viewleaves/viewleaves.component';
import { adminauthGuard } from 'src/services/guards/adminauth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    canActivate: [adminauthGuard],
    component: AdminHomeComponent,
    children: [
      { path: 'student', component: StudentsComponent },
      { path: 'viewleave/:id', component: ViewleavesComponent },
    ]
  },
  {
    path: 'student',
    canActivate: [authGuard],
    component: StudentHomeComponent,
    children: [
      { path: 'apply-complaint', component: ApplyComplaintComponent },
      { path: 'apply-leave', component: ApplyLeaveComponent},
    ]

  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "**", pathMatch: 'full', component: PagenotfoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
