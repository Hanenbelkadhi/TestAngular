import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidenavOpened = false;


  constructor(
    private authService: AuthService,
 
  ) {}

  toggleSidenav() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  logout(){
this.authService.logout()
  }

  isLoggedInUser(): boolean {
    return this.authService.isLoggedInUser();
  }
}
