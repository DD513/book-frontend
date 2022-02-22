import React, { Component } from 'react';
import { Button, Row, Col, Tag } from 'antd';
import images from '../../theme/images';
import './tableComponents.less';


export default class tableComponents extends Component {
  state = {};
  render() {
    const { bookData } = this.props;
    return (
      <Row>
        <Col span={3}><img src={images.threePig} width="100%" /></Col>
        <Col span={18}>
          <Row className="info">
            <Col span={24}><Tag color="volcano">ISBN</Tag>{bookData.ISBN}</Col>
            <Col span={24}><Tag color="orange">書名</Tag>{bookData.name}</Col>
            <Col span={24}><Tag color="gold">作者</Tag>{bookData.author}</Col>
            <Col span={24}><Tag color="magenta">描述</Tag>{bookData.abstract}</Col>
          </Row>
        </Col>
        <Col span={3}><Button type="dashed" className="btntype">編輯</Button>
          <Button danger className="btntype">刪除</Button></Col>
      </Row>
    )
  }
}
