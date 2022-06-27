import { createReducer } from '@reduxjs/toolkit'
import moment from 'moment'

import { IUsersState } from './types'

import { editUser, deleteUser, toggleFetcingStatus, setUsers, clearUsers } from './actions'

const initialState: IUsersState = {
  fetching: false,
  users: []
}

export const usersReducer = createReducer(initialState, builder =>
  builder
    .addCase(editUser, (state,{payload}) => {
      const {login, dob,...rest} = payload;
      const {users} = state;
      const {date} = dob;

      const newAge = Math.floor(moment().diff(date,'years',true));
      const newDate = date;

      const newDob = {date: newDate, age: newAge};

      const indexOfUser = users.findIndex(user => user.login.uuid === login.uuid);
      users[indexOfUser] = {...users[indexOfUser],dob:newDob, ...rest};
    })
    .addCase(deleteUser, (state, {payload}) => {
      const {uuid} = payload;
      state.users = state.users.filter(user => user.login.uuid !== uuid)
    })

    .addCase(clearUsers, (state) => ({...state, users: []}))
    .addCase(toggleFetcingStatus, (state) => ({...state, fetching: !state.fetching}))
    .addCase(setUsers, (state, {payload}) => ({...state, users:[...state.users,...payload]}))
)
