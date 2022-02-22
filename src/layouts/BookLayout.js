import React, { Component } from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';
import { Layout, Tabs } from 'antd';
import './BookLayout.less';
import { HomeOutlined, SearchOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { Link, Route, Redirect } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

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

      onTabChanged = (key) => {
        this.props.history.push('/' + key, {
          tabKey: key
        });
      }

      render() {
        const { children } = this.props;

        return (
          <Layout>
            <header className="bookLayout">
              <h1 className="title">Library</h1>
            </header>
            {children}
            <Footer>
              <Tabs activeKey={(this.props.location.state && this.props.location.state.tabKey) ? this.props.location.state.tabKey : '/start'} onChange={this.onTabChanged}>
                <TabPane tab={<HomeOutlined />} key=''>
                </TabPane>
                <TabPane tab={<SearchOutlined />} key='start'>
                </TabPane>
                <TabPane tab={<PlusOutlined />} key="start/create">
                </TabPane>
                <TabPane tab={<UserOutlined />} key="start/user">
                </TabPane>
              </Tabs>

              <Route
                exact
                path="/"
                render={() => (<Redirect to={this.props.match.url + '/start'} />)}
              />

            </Footer>
          </Layout>

        );
      }
    },
  ),
);
