import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {

  employee: Employee;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private employeeService: EmployeeService) {
    this.employee = new Employee();
  }

  onSubmit() {
    this.employeeService.save(this.employee).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/employees']);
  }
}
