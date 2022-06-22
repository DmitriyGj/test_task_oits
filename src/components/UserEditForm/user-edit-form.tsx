import { IUserEditFormProps } from './types';
import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
import { useAppDispatch } from '../../store';
import { editUser } from 'store/users/actions';
import { IUser } from 'models';

export const UserEditForm = (props: IUserEditFormProps) => {
  const dispatch = useAppDispatch();
  const onFinish = useCallback((value: Partial<IUser>) => () => dispatch(editUser({id: props.id, ...value})), [props]);

  return(<Form initialValues={props}>
        <Form.Item name='name'
                    label='Name'>
          <Input.Group compact>
            <Form.Item  name={['name','title']}
                      rules={[{required: true, message: 'Please fill the field'}]}
                      noStyle >
              <Input />
            </Form.Item>
            <Form.Item name={['name','first']}
                      rules={[{required: true, message: 'Please fill the field'}]}
                      noStyle >
              <Input />
            </Form.Item>
            <Form.Item name={['name','last']}
                      rules={[{required: true, message: 'Please fill the field'}]}
                      noStyle >
              <Input />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item label='Email'
                  name='email'
                  rules={[{required: true, message: 'Please fill the field', type:'email'}]} >
            <Input  />
        </Form.Item>
        <Form.Item label='Phone'
                  name='phone'
                  rules={[{required: true, message: 'Please fill the field correct'}]}>
            <Input  />
        </Form.Item>
        <Form.Item label='Сell'
                  name='cell'  
                  rules={[{required: true, message: 'Please fill the field'}]}>
            <Input  />
        </Form.Item>
      </Form>)
};