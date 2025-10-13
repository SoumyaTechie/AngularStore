import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, EmployeeCardComponent],
  template: `
    <h2>Employee List</h2>
    <div *ngIf="selectedEmployee" class="selected">
      <h3>Selected Employee: {{ selectedEmployee.name }}</h3>
    </div>
    <div class="employee-container">
      <app-employee-card
        *ngFor="let emp of employees"
        [employee]="emp"
        (employeeSelected)="onEmployeeSelected($event)">
      </app-employee-card>
    </div>
  `,
  styles: [`
    .employee-container {
      display: flex;
      flex-wrap: wrap;
    }
    .selected {
      background-color: #e6f7ff;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #b3e0ff;
      border-radius: 6px;
    }
  `]
})
export class EmployeeListComponent {
  employees: Employee[] = [
    { id: 1, name: 'Alice', role: 'Developer', department: 'IT' },
    { id: 2, name: 'Bob', role: 'Designer', department: 'UI/UX' },
    { id: 3, name: 'Charlie', role: 'Manager', department: 'Operations' },
  ];

  selectedEmployee: Employee | null = null;

  onEmployeeSelected(emp: Employee) {
    this.selectedEmployee = emp;
  }
}
