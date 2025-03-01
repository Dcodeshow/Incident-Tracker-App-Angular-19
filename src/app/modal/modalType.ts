export class loginModal {
  userName: string;
  password: string;
  constructor() {
    this.userName = '';
    this.password = '';
  }
}

export class createIncidentModel {
  incidentId: number;
  title: string;
  description: string;
  priority: string;
  status: string;
  createdBy: number;
  assignedTo: unknown;
  createdDate: Date;
  resolvedDate: unknown;
  constructor() {
    this.incidentId = 0;
    this.title = '';
    this.description = '';
    this.priority = '';
    this.status = '';
    this.createdBy = 0;
    this.assignedTo = null;
    this.createdDate = new Date();
    this.resolvedDate = null;
  }
}

export interface loginResponseInterface {
  message: string;
  result: boolean;
  data: any;
}

export interface RootObject {
  createdDate: string;
  emailId: string;
  fullName: string;
  password: string;
  projectName: string;
  refreshToken?: any;
  refreshTokenExpiryTime?: any;
  role: string;
  userId: number;
  userName: string;
}
