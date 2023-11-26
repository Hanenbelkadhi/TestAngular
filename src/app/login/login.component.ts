import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {

    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      this.authService.login(formData.username, formData.password).subscribe(isValid => {
        if (isValid) {
          this.router.navigate(['/']); 
        }
      });
    } else {
      console.log('Form is invalid');
    }
 }
}
