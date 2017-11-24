import { IOrganisation } from './organisation';

export interface IUserConn {
  id: number;
  title: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  organisationList: IOrganisation[];
  abreviation: string;
}
