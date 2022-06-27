import { IUserEditFormProps } from './types';
import React from 'react';
import { DatePicker, Form, Input, Modal } from 'antd';
import dayjs from 'dayjs';
import { DelegatedPlugin } from 'webpack';
import moment from 'moment';

export const UserEditForm = ({visible, onCreate, onCancel, userInfo}: IUserEditFormProps) => {
  const [form] = Form.useForm();

  return(<Modal visible={visible}
                onCancel={onCancel}
                onOk={() => {
                  form.validateFields()
                  .then(values => {
                    onCreate({login:userInfo.login, ...values});
                    onCancel();
                  })
                }}>
        <Form form={form} 
            initialValues={userInfo}>
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
          <Form.Item  label = 'Date of birth'
                      name = {['dob','date']}
                      rules = {[{required: true, type:'date' }]}
                      getValueProps = {(value) => ({value: value? moment(value): moment(new Date())})}
                      >
              <DatePicker  />
          </Form.Item> 
        </Form>
      </Modal>)
};