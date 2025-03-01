import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { loginModal, loginResponseInterface } from '../../modal/modalType';
import { MasterServicesService } from '../../services/master-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  error: string = '';
  userLoginDetails: loginModal = new loginModal();

  _masterService: MasterServicesService = inject(MasterServicesService);
  Router: Router = inject(Router);

  loginUser() {
    this._masterService
      .getLogin(this.userLoginDetails)
      .subscribe((data: loginResponseInterface) => {
        if (data.result) {
          localStorage.setItem('incidentUser', JSON.stringify(data.data));
          this.Router.navigate(['dashboard']);
        } else {
          this.error = data.message;
          this.userLoginDetails.password = '';
          this.userLoginDetails.userName = '';
        }
      });
  }
}
