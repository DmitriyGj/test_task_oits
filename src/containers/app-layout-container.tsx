import React from 'react'

import { AppLayout, IAppAction } from '../components/app-layout'
import { UsersTableContainer } from './users-table-container'

import { generate} from '../store/users/thunks'
import { useAppDispatch } from '../store'

export const AppLayoutContainer = () => {
  const dispatch = useAppDispatch()

  const actions: IAppAction[] = [
    { key: 'generate', title: 'Сгенерировать еще раз', action: () => dispatch(generate({needClear: true, count:21})) },
    { key: 'add', title: 'Добавить', action: () => dispatch(generate({needClear:false, count: 1})) },
  ]

  return <AppLayout actions={actions}>
    <UsersTableContainer />
  </AppLayout>
}
