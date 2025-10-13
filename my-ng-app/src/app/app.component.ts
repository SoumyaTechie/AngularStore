import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent],
  template: `
    <h1>Day 1: Angular Standalone Components</h1>
    <app-employee-list />
  `,
})
export class AppComponent {}
