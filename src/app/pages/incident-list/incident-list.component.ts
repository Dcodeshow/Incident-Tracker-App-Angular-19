import { Component, inject } from '@angular/core';
import { MasterServicesService } from '../../services/master-services.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-incident-list',
  imports: [],
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.scss',
})
export class IncidentListComponent {
  _masterServicesService: MasterServicesService = inject(MasterServicesService);
  logginUserData: any;
  incidentList: any[] = [];

  constructor() {
    const data = localStorage.getItem('incidentUser');
    if (data !== null) {
      const userData = JSON.parse(data);
      this.logginUserData = userData;
      console.log(this.logginUserData);
    }
    this.getIncidentCreateByUser();
  }

  getIncidentCreateByUser() {
    this._masterServicesService
      .getIncidentById(this.logginUserData.userId)
      .subscribe((val: any) => {
        this.incidentList = val;
        console.log(this.incidentList);
      });
  }

  getAllIncident() {
    this._masterServicesService.getIncidentList().subscribe((val: any) => {
      this.incidentList = val;
    });
  }

  getIncidentAssignToUser() {
    this._masterServicesService.getIncidentList().subscribe((val: any) => {
      this.incidentList = val;
    });
  }

  ngOnInit(): void {
    if (this.logginUserData == 'User') {
      this.getIncidentCreateByUser();
    } else if (this.logginUserData == 'IncidentAdmin') {
      this.getAllIncident();
    } else if (this.logginUserData == 'Support Staff') {
      this.getIncidentAssignToUser();
    }
  }
}
