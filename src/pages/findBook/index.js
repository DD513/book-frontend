import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';
import { Row, Col, Button, Alert, Tag } from 'antd'
import InputComponent from '../../components/inputComponents/inputComponents';
import images from '../../theme/images';
import _ from 'lodash';
import { LeftOutlined } from '@ant-design/icons';


const mapStateToProps = state => {
  return {
    books: _.get(state, 'books.books', []),
    thisbook: _.get(state, 'books.thisbook', undefined),
    deletebook: _.get(state, 'book.deletebook', undefined)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    goToRoute(path) {
      dispatch({ type: 'global/goToRoute', path })
    },
    GET_AllBook(loading) {
      dispatch({
        type: 'books/GET_AllBook',
        loading,
      });
    },
    GetThisBook(payload, loading, callback) {
      dispatch({ type: 'books/GetThisBook', payload, loading, callback });
    },
    DleeteBook(id, loading, callback) {
      dispatch({ type: 'books/DleeteBook', id, loading, callback });
    },
    goToRoute(path) {
      dispatch({ type: 'global/goToRoute', path })
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class find extends Component {
    state = {
      loading: false,
    };

    componentDidMount = () => {
      const { GET_AllBook } = this.props;
      const loading = bool => this.setState({ loading: bool })
      GET_AllBook(loading);
    };

    getThisBook = (name) => {
      const { GetThisBook } = this.props;
      GetThisBook(name);
    }

    editbook = (item) => {
      // const { goToRoute } = this.props;
      // goToRoute(`/start/edit/${item.id}`);
      this.props.history.push(`/start/edit/${item.id}`);
    }

    deletebook = (id) => {
      console.log('nono', id);
      const { DleeteBook } = this.props;
      DleeteBook(id);
      // this.props.history.go(0);
    }

    goBackHandler = (id,values) => {
      const { goToRoute } = this.props;
      // goToRoute(`/start`);
      this.props.history.go(0);
    }

    render() {
      const { books, thisbook } = this.props;
      console.log('im', thisbook)
      const { loading } = this.state;
      return (
        <div className="content" >
          <InputComponent bookname={this.getThisBook}></InputComponent>
          {_.isUndefined(thisbook)
            ? books.map((item, index) => (
              <Row key={index}>
                <Col span={3}><img src={images.threePig} width="100%" /></Col>
                <Col span={18}>
                  <Row className="info">
                    <Col span={24}><Tag color="volcano">ISBN</Tag>{item.ISBN}</Col>
                    <Col span={24}><Tag color="orange">書名</Tag>{item.name}</Col>
                    <Col span={24}><Tag color="gold">作者</Tag>{item.author}</Col>
                    <Col span={24}><Tag color="magenta">描述</Tag>{item.abstract}</Col>
                  </Row>
                </Col>
                <Col span={3}>
                  <Button type="dashed" className="btntype" onClick={() => this.editbook(item)}>編輯</Button>
                  <Button danger key={item.id} className="btntype" onClick={() => this.deletebook(item.id)}>刪除</Button>
                </Col>
              </Row>

            ))
            : <Row key={thisbook.id}>
              <Col span={3}><img src={images.threePig} width="100%" /></Col>
              <Col span={18}>
                <Row className="info">
                  <Col span={24}><Tag color="volcano">ISBN</Tag>{thisbook.ISBN}</Col>
                  <Col span={24}><Tag color="orange">書名</Tag>{thisbook.name}</Col>
                  <Col span={24}><Tag color="gold">作者</Tag>{thisbook.author}</Col>
                  <Col span={24}><Tag color="magenta">描述</Tag>{thisbook.abstract}</Col>
                </Row>
              </Col>
              <Col span={3}>
                <Button type="dashed" key={thisbook.id} className="btntype">編輯</Button>
                <Button danger key={thisbook.id} className="btntype" onClick={() => this.deletebook(thisbook.id)}>刪除</Button>
              </Col>
            </Row>
          }
          <div className="goBackBlock">
              <LeftOutlined 
                style={{ fontSize: '20px', color: '#08c' }}
                onClick={this.goBackHandler}
              />
            </div>
        </div >

      );
    }
  },
);
