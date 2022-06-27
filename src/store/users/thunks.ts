import { createAsyncThunk } from '@reduxjs/toolkit'

import { randomuser } from '../../utils'
import { IGenerateParams } from './types'

import { clearUsers, setUsers, toggleFetcingStatus } from './actions'

const getUsersByCount = async (count: number) => randomuser(count)

export const generate = createAsyncThunk(
  'users.generate',
  async ({needClear = true, count}:IGenerateParams, {dispatch}) =>{
    dispatch(toggleFetcingStatus());
    try{
      const users = await getUsersByCount(count);
      needClear && dispatch(clearUsers())
      dispatch(setUsers(users))
    }
    catch {
      dispatch(setUsers([]))
    }

    finally {
      dispatch(toggleFetcingStatus())
    }
  }
)