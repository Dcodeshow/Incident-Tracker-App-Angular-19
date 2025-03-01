import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { loginModal, loginResponseInterface } from '../modal/modalType';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasterServicesService {
  http: HttpClient = inject(HttpClient);

  constructor() {}

  getLogin(loginDetails: loginModal): Observable<any> {
    return this.http.post<loginResponseInterface>(
      `${environment.API_URL_USER}${environment.USER_KEY.login}`,
      loginDetails
    );
  }

  getAllUser(): Observable<any> {
    return this.http.get<any>(
      `${environment.API_URL_USER}${environment.USER_KEY.GetAllUsers}`
    );
  }

  createNewUser(obj: any) {
    return this.http.post(
      `${environment.API_URL_USER}${environment.USER_KEY.Register}`,
      obj
    );
  }

  updateUser(obj: any) {
    return this.http.post(
      `${environment.API_URL_USER}${environment.USER_KEY.UpdateUser}`,
      obj
    );
  }

  deleteUserById(id: any) {
    return this.http.delete(
      `${environment.API_URL_USER}${environment.USER_KEY.DeleteUserByUserId}?userId= ${id} `
    );
  }

  /**========================================================**/

  createNewIncident(obj: any) {
    return this.http.post(
      `${environment.API_URL_INCIDENT}${environment.NewIncident.createIncident}`,
      obj
    );
  }

  getIncidentList() {
    return this.http.get(
      `${environment.API_URL_INCIDENT}${environment.NewIncident.getAllIncidents}`
    );
  }

  getIncidentById(id: any) {
    return this.http.get(
      `${environment.API_URL_INCIDENT}${environment.NewIncident.getIncidentCreatedByUser}?userId= ${id}`
    );
  }

  getIncidentAssigntoUser(id: any) {
    return this.http.get(
      `${environment.API_URL_INCIDENT}${environment.NewIncident.getIncidentAssigntoUser}?userId= ${id}`
    );
  }
}
