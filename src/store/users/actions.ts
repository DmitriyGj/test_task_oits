import { createAction } from '@reduxjs/toolkit';
import { IEditbleUserInfo, ILoginInfo } from 'models/randomuser';

import { IUser } from '../../models';

export const setUsers = createAction<IUser[]>('users.setUsers');
export const clearUsers = createAction('users.Clear');
export const toggleFetcingStatus = createAction<boolean>('users.toggleFetchingStatus');

export const addUser = createAction<Partial<IUser>>('users.addUser');
export const editUser = createAction<IEditbleUserInfo>('users.editUser');
export const deleteUser = createAction<ILoginInfo>('users.deleteUser');