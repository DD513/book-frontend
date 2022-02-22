import React, { Component } from 'react';
import { connect } from 'dva';
import './index.less';
import images from '../../theme/images'
import { Button } from 'antd';
import { Link } from "react-router-dom";
import '../../sw.js' ;
import '../../status.js' ;


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
  class Analysis extends Component {
    render() {
      return (
        <div className="bgBlock">
          <img src={images.indexBackground} className="bg"></img>
          <Link to="/start" className="buttonRoute">
            <Button type="primary" className="start">Get Start ! </Button>
          </Link>
        </div>
      );
    }
  },
);
