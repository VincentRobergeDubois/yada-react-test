export interface IUser {
  id: number,
  hash: string,
  username: string,
  lastname: string,
  firstname: string,
  email: string,
  phone: string,
  createdAt: Date,
  createdBy: IUser,
  modifiedAt: Date,
  modifiedBy: IUser,
  archivedAt: Date,
  archivedBy: IUser
}
