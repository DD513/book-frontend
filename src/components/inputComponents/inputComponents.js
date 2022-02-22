import React, { Component } from 'react';
import { connect } from 'dva';
import './inputComponents.less';
import { Input } from 'antd';
import Layout from 'antd/lib/layout/layout';
const { Search } = Input;

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  class InputComponent extends Component {
    onSearch = (value) => {
      const { bookname } = this.props;
      console.log(value);
      bookname(value);
    }
    render() {
      return (
        <div className="input">
          <Search placeholder="Search For Book" onSearch={this.onSearch} style={{ width: 300 }} />
        </div>
      );
    }
  },
);

