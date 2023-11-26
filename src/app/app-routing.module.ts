import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeCreationComponent } from './employees/employee-creation/employee-creation.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { ProfilComponent } from './profil/profil.component';
const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ajout', component: EmployeeCreationComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'profil', component: ProfilComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
