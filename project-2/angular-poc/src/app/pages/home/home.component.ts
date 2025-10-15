import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Welcome to Angular Asset Manager!';
  greetings = ['Hello Angular!', 'Welcome to Standalone Components!'];

  addGreeting() {
    this.greetings.push('New Greeting Added!');
  }

  removeGreeting(index: number) {
    this.greetings.splice(index, 1);
  }
}
