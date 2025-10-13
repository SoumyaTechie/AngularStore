import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h3>{{ employee.name }}</h3>
      <p>Role: {{ employee.role }}</p>
      <p>Department: {{ employee.department }}</p>
      <button (click)="selectEmployee()">Select</button>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ddd;
      padding: 12px;
      margin: 10px;
      border-radius: 8px;
      background-color: #f8f8f8;
      width: 200px;
    }
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 6px 10px;
      border-radius: 4px;
    }
  `]
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Output() employeeSelected = new EventEmitter<Employee>();

  selectEmployee() {
    this.employeeSelected.emit(this.employee);
  }
}
