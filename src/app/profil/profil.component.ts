import { ProfilService } from '../services/profil.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private profileService: ProfilService) {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.fetchUserProfile();
  }



  fetchUserProfile(): void {
    this.profileService.getUserProfile().subscribe(
      (profileData: any[]) => {
        if (profileData.length > 0) {
          const userProfile = profileData[0]; // Assuming there is only one profile object
  
          this.profileForm.patchValue({
            name: userProfile.name,
            last_name: userProfile.last_name,
            email: userProfile.email,
            password: userProfile.password
          });
        } else {
          console.error('No profile data found');
        }
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
  

  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedProfileData = this.profileForm.value;
console.log(updatedProfileData)
      this.profileService.updateUserProfile(updatedProfileData).subscribe(
        (response) => {
          console.log('Profile updated successfully:', response);
          // You can perform actions upon successful update, like showing a success message
        },
        (error) => {
          console.error('Error updating profile:', error);
          // Handle error scenarios accordingly
        }
      );
    }
  }
}