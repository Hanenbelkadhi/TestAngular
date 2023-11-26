import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeCreationComponent } from './employees/employee-creation/employee-creation.component';
import { FormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeCreationComponent,EmployeeListComponent, ProfilComponent,
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,HttpClientModule,FormsModule,
    AppRoutingModule,ReactiveFormsModule,MatButtonModule,MatCardModule,MatInputModule,MatToolbarModule,MatIconModule,MatSidenavModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
