import { createReducer } from '@reduxjs/toolkit'

import { IUsersState } from './types'

import { generate } from './thunks'

import { editUser, deleteUser } from './actions'

const initialState: IUsersState = {
  fetching: false,
  users: []
}

export const usersReducer = createReducer(initialState, builder =>
  builder
    .addCase(editUser, (state,{payload}) => {
      const {login, ...rest} = payload;
      const {users} = state;
      const indexOfUser = users.findIndex(user => user.login.uuid === login.uuid);
      users[indexOfUser] = {...users[indexOfUser], ...rest};
    })
    .addCase(deleteUser, (state, {payload}) => {
      const {uuid} = payload;
      state.users = state.users.filter(user => user.login.uuid !== uuid)
    })
    .addCase(generate.pending, (state) => {return({ ...state, fetching: true })})
    .addCase(generate.fulfilled, (state, { payload }) => {return({ ...state, fetching: false, users: [ ...payload ] })})
    .addCase(generate.rejected, (state, { payload }) => ({ ...state, fetching: false, users: [] })))
