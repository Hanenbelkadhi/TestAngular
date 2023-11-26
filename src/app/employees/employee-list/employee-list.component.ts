import { Employee } from './../../interfaces/employees.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];
  searchText: string = '';
  searchBy: 'name' | 'id' = 'name'; 
  showUpdateForm: boolean = false; 
  updateEmployeeForm: FormGroup; 

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loadEmployees();
    this.updateEmployeeForm = this.formBuilder.group({
      id:[''],
      name: [''],
      last_name: [''],
      email: [''],
      materiel: [''],
      validated: ['']
    });
  }

  loadEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(
        (data: any[]) => {
          this.employees = data;
        },
        (error) => {
          console.error('Error fetching employees:', error);
        }
      );
  }

  get filteredEmployees(): any[] {
    return this.employees.filter((employee: any) => {
      const searchValue = this.searchText.toLowerCase();

      if (this.searchBy === 'name') {
        const name = employee.name ? employee.name.toLowerCase() : '';
        const lastName = employee.last_name ? employee.last_name.toLowerCase() : '';
        const fullName = `${name} ${lastName}`; // Consider full name for searching

        return (
          name.includes(searchValue) ||
          lastName.includes(searchValue) ||
          fullName.includes(searchValue)
        );
      } else if (this.searchBy === 'id') {
        const id = employee.id ? employee.id.toString().toLowerCase() : '';
        return id.includes(searchValue);
      } else if (this.searchBy === 'materiel') {
        const materiel = employee.materiel ? employee.materiel.toLowerCase() : '';
        return materiel.includes(searchValue);
      }

      return false;
    });
  }



  deleteEmployee(employee) {
    this.employeeService.deleteEmployee(employee.id).subscribe(
      () => {
        this.employees = this.employees.filter((emp) => emp.id !== employee.id);
        console.log('Employee deleted successfully');
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }

  openUpdateForm(employee: any): void {
    this.updateEmployeeForm.patchValue({
      id:employee.id,
      name: employee.name,
      last_name: employee.last_name,
      email: employee.email,
      materiel: employee.materiel,
      validated: employee.validated
    });

    this.showUpdateForm = true;
  }
  
  onSubmitUpdate(employee): void {
    if (this.updateEmployeeForm.valid) {

let updatedemployee= this.updateEmployeeForm.value
console.log(updatedemployee)
      this.employeeService.updateEmployee(updatedemployee.id, updatedemployee).subscribe(
        (response) => {
          console.log('Employee updated successfully:', response);
          this.showUpdateForm = false;
          location.reload()
        
        },
        (error) => {
          console.error('Error updating employee:', error);
         
        }
      );
    }
  }
}
