import { Component, inject, signal } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-users',
  imports: [ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  _masterService: MasterServicesService = inject(MasterServicesService);

  userForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.getAlluser();
  }

  Alluser = signal<any[]>([]);

  constructor() {
    this.initialForm();
  }

  initialForm(updateUser?: any) {
    this.userForm = new FormGroup({
      userId: new FormControl(updateUser ? updateUser.userId : 0),
      userName: new FormControl(
        updateUser ? updateUser.userName : '',
        Validators.required
      ),
      emailId: new FormControl(
        updateUser ? updateUser.emailId : '',
        Validators.required
      ),
      fullName: new FormControl(
        updateUser ? updateUser.fullName : '',
        Validators.required
      ),
      password: new FormControl(
        updateUser ? updateUser.password : '',
        Validators.required
      ),
      role: new FormControl(
        updateUser ? updateUser.role : '',
        Validators.required
      ),
    });
  }

  getAlluser() {
    this._masterService.getAllUser().subscribe((val: any) => {
      this.Alluser.set(val.data);
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      const formValue = this.userForm.value;
      this._masterService.createNewUser(formValue).subscribe((val: any) => {
        if (val.result) {
          alert('User Created Successfully');
          this.getAlluser();
        } else {
          alert(val.message);
        }
      });
    } else {
      console.log('invalid');
    }
  }

  onEdit(item: any) {
    console.log(item);
    this.initialForm(item);
  }

  onUpdate() {
    const formValue = this.userForm.value;

    formValue.createdDate = new Date();
    formValue.projectName = 'IncidentTracking';
    formValue.refreshToken = new Date();
    formValue.refreshTokenExpiryTime = new Date();
    this._masterService.updateUser(formValue).subscribe((val: any) => {
      if (val.result) {
        alert('User Updated Successfully');
        this.getAlluser();
      } else {
        alert(val.message);
      }
    });
  }

  onDelete(userId: any) {
    this._masterService.deleteUserById(userId).subscribe((val: any) => {
      if (val.result) {
        alert('User Deleted Successfully');
        this.getAlluser();
      } else {
        alert(val.message);
      }
    });
  }
}
