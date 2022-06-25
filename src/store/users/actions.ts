import { createAction } from '@reduxjs/toolkit';
import { IEditbleUserInfo, ILoginInfo } from 'models/randomuser';

import { IUser } from '../../models';

export const setUsers = createAction<IUser[]>('users.setReady');
export const editUser = createAction<IEditbleUserInfo>('users.editUser');
export const deleteUser = createAction<ILoginInfo>('users.deleteUser');