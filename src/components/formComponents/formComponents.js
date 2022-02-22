import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import './formComponents.less';
import Images from '../imagesComponents/imagesComponents';
import _ from 'lodash';

const { TextArea } = Input;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
};
/* eslint-enable no-template-curly-in-string */


export default class formComponents extends Component {
  componentDidMount = () => {
    this.updateForm();
  };

  componentDidUpdate = () => {
    this.updateForm();
  };

  updateForm = () => {
    const { refProps, book } = this.props;
    if (_.isUndefined(book)) {
      refProps.current.resetFields();
    } else {
      refProps.current.setFields(
        _.map(Object.keys(book), (key) => {
          return {
            name: key,
            value: book[key],
          };
        }),
      );
    }
  }

  onFinish = (values) => {
    const { editHandler,book,modalType,handleCreate } = this.props;
    console.log('鬼才',modalType);
    switch (modalType) {
      case 'create':
        handleCreate(values);
        break;
      case 'edit':
        // const books = new FormData();
        // // values['cover']
        // // values.cover
        // _.map(Object.keys(values), (key) => {
        //   if (key === 'cover') {
        //     //
        //   } else {
        //     books.append(key, values[key]);
        //   }
        // })
        // for (let pair of books.entries()) {
        //   console.log(`${pair[0]},${pair[1]}`);
        // }
        editHandler(book.id,values);
      default:
        break;
    }
    
  };



  render() {
    const { refProps,modalType } = this.props;
    return (
      <Form
        {...layout}
        ref={refProps}
        onFinish={this.onFinish}
        name="createBook"
        validateMessages={validateMessages}
      >
        <Form.Item name={['cover']} rules={[{}]}>
          <Images />
        </Form.Item>
        <Form.Item name={['ISBN']} rules={[{ required: true }]}>
          <Input placeholder="ISBN" maxLength={13} />
        </Form.Item>
        <Form.Item name={['name']} rules={[{}]}>
          <Input placeholder="書名" />
        </Form.Item>
        <Form.Item name={['author']} rules={[{}]}>
          <Input placeholder="作者" />
        </Form.Item>
        <Form.Item name={['abstract']}>
          <TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
          <Button
            htmlType="submit"
            className="createactive"
            style={{ marginBottom: '10px' }}
            icon={<PlusCircleOutlined />}
          >
            新增書籍資訊
          </Button>
          <Button
            className="createactive"
            style={{ marginBottom: '10px' }}
            icon={<CloseCircleOutlined />}
          >
            取消
          </Button>
        </Form.Item>
      </Form>
    );
  }



}
