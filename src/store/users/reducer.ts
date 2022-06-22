import { createReducer } from '@reduxjs/toolkit'

import { IUsersState } from './types'

import { generate } from './thunks'

import { editUser } from './actions'

const initialState: IUsersState = {
  fetching: false,
  users: []
}

export const usersReducer = createReducer(initialState, builder =>
  builder
    .addCase(editUser, (state,{payload}) => {
      const {id,...rest} = payload;
      const indexOfUser = state.users.findIndex(defUser => defUser.id === id);
      state.users[indexOfUser] = {id, ...rest};
    })
    .addCase(generate.pending, (state) => ({ ...state, fetching: true }))
    .addCase(generate.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: [ ...payload ] }))
    .addCase(generate.rejected, (state, { payload }) => ({ ...state, fetching: false, users: [] })))
