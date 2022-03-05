import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { HomeComponent } from './components/home/home.component';
import { ListStudentComponent } from './components/list-student/list-student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'students',
    component: ListStudentComponent,
  },
  {
    path: 'add',
    component: AddStudentComponent,
  },
  {
    path: 'edit/:id',
    component: EditStudentComponent,
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
