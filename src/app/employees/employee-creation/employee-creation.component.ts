import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-creation',
  templateUrl: './employee-creation.component.html',
  styleUrls: ['./employee-creation.component.css']
})
export class EmployeeCreationComponent implements OnInit {
  employeeForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private http: HttpClient ,private employeeService: EmployeeService) {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      validated: ['', Validators.required],
      material: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeId = Math.floor(1000 + Math.random() * 9000); 
     
      const employeeData = {
        id: employeeId, 
        name: this.employeeForm.value.firstName,
        last_name: this.employeeForm.value.lastName,
        validated: this.employeeForm.value.validated,
        materiel: this.employeeForm.value.material,
        email: this.employeeForm.value.email,
      };
  
      this.employeeService.createEmployee(employeeData).subscribe(
        (res) => {
          console.log('Employee created:', res);
          this.employeeForm.reset();
        },
        (error) => {
          console.error('Error creating employee:', error);
        }
      );
    }
  }
  
  
  
}
