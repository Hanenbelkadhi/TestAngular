import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  private apiUrl = 'http://localhost:3000'; // API base URL

  constructor(private http: HttpClient) {}

  updateUserProfile(updatedProfileData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/profil/1`, updatedProfileData);
  }
  getUserProfile(): Observable<any> {
        // Implement the logic to update user profile details via HTTP PUT request
        return this.http.get<any>(`${this.apiUrl}/profil`);
  }
}
