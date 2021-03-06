import React, { useCallback, useEffect, useState, useMemo } from 'react'
import ResizeObserver from 'rc-resize-observer'
import { Image, Table, TableColumnsType, Modal, Button } from 'antd'
import dayjs from 'dayjs'

import { UserEditForm } from '../user-edit-form/user-edit-form'

import { IUser } from '../../models'
import { IUsersTableProps } from './types'

import './users-table.less'
import { IEditbleUserInfo, ILoginInfo } from 'models/randomuser'
import { useAppDispatch } from '../../store'
import { editUser, deleteUser } from '../../store/users/actions'

export const UsersTable = ({ loading, users }: IUsersTableProps) => {
  const [ height, setTableHeight ] = useState(undefined);
  const [userForEdit, setUserForEdit] = useState<IUser>(null);
  const dispatch = useAppDispatch();

  const onCreate = useCallback((values: IEditbleUserInfo) => dispatch(editUser(values)) ,[])
  const onDelete = useCallback((login: ILoginInfo) => dispatch(deleteUser(login)),[]);
  
  const columnsForTable = useMemo(() => [...columns, { title: '',
        render: ({login}:IUser) => <a onClick={() => onDelete(login)}>Delete</a>}], [users,onDelete])

  const heighDelta = 39 // 39 - высота заголовка таблицы
  return ( <>
    <ResizeObserver onResize={({ height: componentHeight }) => setTableHeight(Math.max(0, componentHeight - heighDelta))}>
        <div className="users-table">
          <Table size="small" loading={loading} dataSource={users} columns={columnsForTable}
            scroll={{ y: height }} pagination={false} rowKey={keySelector}
            onRow={(user) => ({ onDoubleClick: () => setUserForEdit(user) })} />
        </div>
    </ResizeObserver>
    { userForEdit && <UserEditForm  visible={!!userForEdit} 
        onCreate={onCreate}
        onCancel={() => setUserForEdit(null)} 
        userInfo = {userForEdit}/>}
  </>)
}


const keySelector = (user: IUser) => user.login.uuid

const columns: TableColumnsType<IUser> = [
  {
    dataIndex: 'picture',
    width: 64,
    render: ({ thumbnail, large }) => <Image src={thumbnail} preview={{ src: large }} alt="photo" />
  },
  {
    title: 'Имя пользователя',
    dataIndex: [ 'login', 'username' ]
  },
  {
    title: 'Полное имя',
    dataIndex: 'name',
    render: ({ title, first, last }) => `${title} ${first} ${last}`
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Телефон',
    dataIndex: 'cell'
  },
  {
    title: 'Возраст',
    dataIndex: [ 'dob', 'age' ]
  },
  {
    title: 'Дата регистрации',
    dataIndex: [ 'registered', 'date' ],
    render: (date: string) => dayjs(date).format('D MMMM YYYY ')
  }
]
