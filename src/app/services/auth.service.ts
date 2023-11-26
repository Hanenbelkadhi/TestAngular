import { User } from './../interfaces/user.interface';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { ProfilService } from "./profil.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  constructor(
    private router: Router,
    private profilService:ProfilService
  ) {}
  user :any
  login(email: string, password: string): Observable<boolean> {
    this.fetchUserProfile()
    console.table(this.user)
    console.log(email)
    console.log(password)
    const isValid = (email === this.user.email && password === this.user.password);
    this.isLoggedIn = isValid;
    return of(isValid);

  }

  fetchUserProfile(): void {
    this.profilService.getUserProfile().subscribe(
      (profileData: any[]) => {
        if (profileData.length > 0) {
          const userProfile = profileData[0]; // Assuming there is only one profile object
          this.user = userProfile
        }
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
  

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }
}
