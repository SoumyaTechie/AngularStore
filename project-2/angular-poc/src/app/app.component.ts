import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/3208/3208676.png" alt="logo" />
        <h1>Angular Asset Manager</h1>
      </div>

      <nav>
        <a
          routerLink="/"
          routerLinkActive="active-link"
          [routerLinkActiveOptions]="{ exact: true }"
        >Home</a>

        <a
          routerLink="/add-asset"
          routerLinkActive="active-link"
        >Add Asset</a>

        <a
          routerLink="/assets"
          routerLinkActive="active-link"
        >Assets List</a>
      </nav>
    </header>

    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    /* Header container */
    .header {
      background: linear-gradient(90deg, #4f46e5, #6d28d9, #9333ea);
      color: #fff;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    /* Logo section */
    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .logo img {
      width: 40px;
      height: 40px;
      filter: brightness(0) invert(1);
    }

    .logo h1 {
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 0.5px;
      margin: 0;
    }

    /* Navigation links */
    nav a {
      color: #e0e7ff;
      text-decoration: none;
      margin-left: 25px;
      font-weight: 500;
      font-size: 1rem;
      position: relative;
      transition: color 0.3s ease;
    }

    nav a:hover {
      color: #fff;
    }

    /* Active link indicator */
    .active-link {
      color: #fff;
      font-weight: 600;
    }

    .active-link::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #fff;
      position: absolute;
      bottom: -4px;
      left: 0;
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    /* Main content padding */
    .content {
      padding: 2rem;
      background: linear-gradient(to bottom right, #f9fafb, #eef2ff);
      min-height: 100vh;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      nav a {
        display: inline-block;
        margin-left: 0;
        margin-right: 15px;
      }
    }
  `],
})
export class AppComponent {}
