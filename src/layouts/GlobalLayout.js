import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb } from 'antd';
import './GlobalLayout.less';

const { Header, Content, Footer } = Layout;

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    goToRoute(path, callback) {
      dispatch({ type: 'global/goToRoute', path, callback });
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(
    class GlobalLayout extends Component {
      state = {
      };

      componentDidMount = () => {

      };

      render() {
        const { children } = this.props;

        return (
          <Layout>
            <header className="globalheader">
              <h1 className="title">Library</h1>
            </header>
            {children}
          </Layout>

        );
      }
    },
  ),
);
