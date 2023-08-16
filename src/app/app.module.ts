import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment.development';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from 'src/services/auth.service';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminHomeComponent } from './admin/admin-component/admin-home/admin-home.component';
import { StudentsComponent } from './admin/admin-component/students/students.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormComponentComponent } from './admin/comman-components/form-component/form-component.component';
import { StudentListComponent } from './admin/admin-component/student-list/student-list.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { ApplyComplaintComponent } from './student/apply-complaint/apply-complaint.component';
import { ApplyLeaveComponent } from './student/apply-leave/apply-leave.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CkeditorComponent } from './student/ckeditor/ckeditor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { StudentComplaintComponent } from './admin/admin-component/student-complaint/student-complaint.component';
import { StudentLeavesComponent } from './admin/admin-component/student-leaves/student-leaves.component';
import {MatCardModule} from '@angular/material/card';
import { SinglecomplaintComponent } from './admin/admin-component/singlecomplaint/singlecomplaint.component';
import { ViewleavesComponent } from './admin/admin-component/viewleaves/viewleaves.component';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { UnauthoriedUserComponent } from './components/unauthoried-user/unauthoried-user.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PagenotfoundComponent,
    AdminHomeComponent,
    StudentsComponent,
    FormComponentComponent,
    StudentListComponent,
    StudentHomeComponent,
    ApplyComplaintComponent,
    ApplyLeaveComponent,
    NavbarComponent,
    CkeditorComponent,
    StudentComplaintComponent,
    StudentLeavesComponent,
    SinglecomplaintComponent,
    ViewleavesComponent,
    UnauthoriedUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatNativeDateModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    NgIf,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    CKEditorModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [AuthService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
