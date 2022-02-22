import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';
import FormComponent from '../../components/formComponents/formComponents';
import _ from 'lodash';
import { message, Button } from 'antd';

const mapStateToProps = state => {
  return {
    createbook: _.get(state, 'books.createbook', []),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    PostCreateBook(payload, loading, callback) {
      dispatch({ type: 'books/PostCreateBook', payload, loading, callback });
    },
  };
};

const success = () => {
  const hide = message.loading('新增成功 in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 1500);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class createBook extends Component {
    state = {
      modalVisible: false,
      modalType: 'create',
      modalTitle: '',
      loading: false,
      editItemId: undefined,
    };

    BookForm = React.createRef();

    componentDidMount = () => {
      const { PostCreateBook } = this.props;
      const loading = bool => this.setState({ loading: bool })
      PostCreateBook(loading);
    };

    handleCreate = (createBook) => {
      const payload = new FormData();
      const { PostCreateBook } = this.props;
      this.setState({
        modalVisible: true,
        modalType: 'create',
        modalTitle: '新增書籍資料',
      });
      payload.append('ISBN', createBook.ISBN);
      payload.append('name', createBook.name);
      payload.append('cover', createBook.cover);
      payload.append('author', createBook.author);
      payload.append('abstract', createBook.abstract);
      console.log('one', createBook, 'pay', payload);
      PostCreateBook(payload);
      success();
      this.props.history.push('/start');
    };

    render() {
      const { modalType } = this.state;
      console.log('dddd',modalType);
      return (
        <div className="content">
          <FormComponent
            refProps={this.BookForm}
            handleCreate={this.handleCreate}
            modalType={modalType}
          />
        </div>
      );
    }
  },
);
