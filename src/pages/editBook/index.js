import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';
import ImagesComponent from '../../components/imagesComponents/imagesComponents';
import FormComponent from '../../components/formComponents/formComponents';
import Layout from 'antd/lib/layout/layout';
import _ from 'lodash';
import { LeftOutlined } from '@ant-design/icons';


const mapStateToProps = state => {
  return {
    book: _.get(state, 'books.book', undefined),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // api/book/:id
    GetAssignBook(id, loading, callback) {
      dispatch({ type: 'books/GetAssignBook', id, loading, callback })
    },
    PutBook(id, payload, loading, callback) {
      dispatch({ type: 'books/PutBook', id, payload, loading, callback });
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
  class EditBook extends Component {
    state = {
      id: undefined,
      modalVisible: false,
      modalType: 'edit',
      modalTitle: '',
      loading: false,
      editItemId: undefined,
    }


    BookForm = React.createRef();

    componentDidMount = () => {
      const {id} = this.props.match.params;
      const { GetAssignBook } = this.props;
      GetAssignBook(id);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      const { GetAssignBook } = nextProps;
      const nextId = nextProps.match.params.id;
      const previousId = prevState.id;
      // const loading = bool => this.setState({ loading: bool })
      if (!_.isEqual(nextId, previousId)) {
        GetAssignBook(nextId);
        return {
          id: nextId
        }
      }
      return null
    }

    editHandler = (id,values) => {
      const { PutBook } = this.props;
      PutBook(id,values);
    }
    goBackHandler = (id,values) => {
      const { goToRoute } = this.props;
      goToRoute(`/start`);
    }


    render() {
      const { book } = this.props;
      const { modalType } = this.state;
      console.log('ddd', book);
      return (
        <div className="content">
          <div className="goBackBlock">
            <LeftOutlined 
              style={{ fontSize: '20px', color: '#08c' }}
              onClick={this.goBackHandler}
            />
          </div>
          <FormComponent
            book={book}
            refProps={this.BookForm}
            modalType={modalType}
            editHandler={this.editHandler}
          />
        </div>
      );
    }
  },
);
