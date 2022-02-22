import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';
import InputComponent from '../../components/inputComponents/inputComponents'

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
  class Login extends Component {
    render() {
      return (
        <div className="content">
          I'm User Page!
        </div>
      );
    }
  },
);
