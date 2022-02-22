import React, { Component } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

export default class Loading extends Component {
  render() {
    return (
      <div style={{ padding: 24, textAlign: 'center' }}>
        <LoadingOutlined style={{ fontSize: 48 }} />
      </div>
    );
  }
}
