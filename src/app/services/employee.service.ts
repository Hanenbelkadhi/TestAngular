import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000'; // API base URL

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/employees`);
  }

  createEmployee(employeeData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/employees`, employeeData);
  }

  updateEmployee(employeeId: number, employeeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/employees/${employeeId}`, employeeData);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/employees/${employeeId}`);
  }
  

}
