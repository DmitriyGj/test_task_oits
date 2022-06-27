import { IUserEditFormProps } from './types';
import React from 'react';
import { DatePicker, Form, Input, Modal } from 'antd';
import moment from 'moment';

export const UserEditForm = ({visible, onCreate, onCancel, userInfo}: IUserEditFormProps) => {
  const [form] = Form.useForm();

  return(<Modal visible={visible}
                onCancel={onCancel}
                okText='Сохранить'
                onOk={() => {
                  form.validateFields()
                  .then(values => {
                    onCancel();
                    onCreate({login:userInfo.login, ...values});
                  })
                }}>
        <Form form={form} 
            initialValues={userInfo}>
          <Form.Item name='name'
                      label='Имя'>
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
          <Form.Item label='Телефон'
                    name='phone'
                    rules={[{required: true, message: 'Please fill the field correct'}]}>
              <Input  />
          </Form.Item>
          <Form.Item label='Сell'
                    name='cell'  
                    rules={[{required: true, message: 'Please fill the field'}]}>
              <Input  />
          </Form.Item>
          <Form.Item  label = 'Дата рождения'
                      name = {['dob','date']}
                      rules = {[{required: true }]}
                      getValueFromEvent = {onchange => new Date(onchange).toISOString()}
                      getValueProps = { (value) => ({value: value? moment(value): moment(new Date())}) }
                      >
              <DatePicker  />
          </Form.Item>      
        </Form>
      </Modal>)
};