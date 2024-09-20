import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class EmployeeService {

  private EmployeesUrl: string;

  constructor(private http: HttpClient) {
    this.EmployeesUrl = `${environment.apiUrl}/employees`;
  }

  public findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.EmployeesUrl);
  }

  public save(Employee: Employee) {
    return this.http.post<Employee>(this.EmployeesUrl, Employee);
  }
}