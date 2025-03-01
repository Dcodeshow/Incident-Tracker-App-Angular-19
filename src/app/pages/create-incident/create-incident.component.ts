import { Component, inject } from '@angular/core';
import { createIncidentModel } from '../../modal/modalType';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterServicesService } from '../../services/master-services.service';

@Component({
  selector: 'app-create-incident',
  imports: [ReactiveFormsModule],
  templateUrl: './create-incident.component.html',
  styleUrl: './create-incident.component.scss',
})
export class CreateIncidentComponent {
  newIncident: createIncidentModel = new createIncidentModel();

  incidentForm: FormGroup = new FormGroup({});
  _masterServicesService: MasterServicesService = inject(MasterServicesService);
  userData: any;
  constructor() {
    this.incidentFun();
    const data: any = localStorage.getItem('incidentUser');
    if (data !== null) {
      this.userData = JSON.parse(data);
      console.log(this.userData);
    }
  }

  incidentFun() {
    this.incidentForm = new FormGroup({
      incidentId: new FormControl(0),
      title: new FormControl(''),
      description: new FormControl(''),
      priority: new FormControl(''),
      status: new FormControl(''),
      createdBy: new FormControl(0),
      //assignedTo: new FormControl(null),
      //createdDate: new FormControl(new Date()),
      resolvedDate: new FormControl(null),
    });
  }

  onSubmit() {

    const formValue = this.incidentForm.value;
    formValue.createdBy = this.userData.userId;
    this._masterServicesService
      .createNewIncident(formValue)
      .subscribe((val) => {
        console.log(val);
      });
  }

  onReset() {
    this.incidentForm.reset();
  }
}
