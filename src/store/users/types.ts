import { IUser } from 'models'

export interface IUsersState {
  fetching: boolean
  users: IUser[]
}

export interface IGenerateParams {
  needClear: boolean, 
  count:number
}
