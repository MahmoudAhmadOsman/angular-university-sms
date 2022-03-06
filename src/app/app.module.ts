import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LoadingComponent } from './components/loading/loading.component';
import { StudentDetailsModalComponent } from './components/student-details-modal/student-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListStudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    LoginStudentComponent,
    RegisterStudentComponent,
    HomeComponent,
    FooterComponent,
    CoursesComponent,
    LoadingComponent,
    StudentDetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
