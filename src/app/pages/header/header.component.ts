import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  userLoginDetails = localStorage.getItem('incidentUser');
  userDetails: any;

  Route: Router = inject(Router);

  constructor() {
    if (this.userLoginDetails !== null) {
      let data = JSON.parse(this.userLoginDetails);
      this.userDetails = data;
    }
  }

  logOut() {
    localStorage.removeItem('incidentUser');
    this.Route.navigate(['login']);
  }
}
