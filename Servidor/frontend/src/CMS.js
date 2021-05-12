import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import './styles/index.css';
import './styles/App.css';
import { Menu, Layout } from 'antd';
import Home from './components/Home';
import Logout from './components/Logout';
import withAuth from './withAuth';
import { ReactComponent as ItemLogo } from './assets/images/chart.svg';
import Cookies from 'js-cookie';
import Items from './components/Item/Items';
import ItemForm from './components/Item/ItemForm';
import ItemInfo from './components/Item/ItemInfo';
import Option2 from './components/Option2';
import Option1 from './components/Option1';
import MediaQuery from 'react-responsive'
import { 
  HomeOutlined, 
  LogoutOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LineChartOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const logout = () => () => {
  Cookies.remove("loggedIn");
  Cookies.remove("token");
}

//Navigation Bar and Routes
export default class NavBar extends Component {
  state = {
    theme: 'dark',
    current: '1',
    collapsed: false
  };

  // Cliques no menu 
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  // Menu colapsável
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

render() {
  if(Cookies.get('token')) {  
    return (
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
        <MediaQuery minWidth={992}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}         
          >
            <div className="logo"><ItemLogo /></div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <HomeOutlined />
                <span>Home</span>
                <Link to="/" />
              </Menu.Item>
                <SubMenu key="sub1" icon={<LineChartOutlined />} title="Navigation One">
                  <Menu.Item key="1.1">Option 1<Link to="/option1" /></Menu.Item>
                  <Menu.Item key="1.2">Option 2<Link to="/option2" /></Menu.Item>
              </SubMenu>
              <Menu.Item key="3">
              <UserOutlined />
                <span>Navigation Two</span>
                <Link to="/item" />
              </Menu.Item>
              <Menu.Item key="5" onClick={logout()}>
              <LogoutOutlined />
                <span>Logout</span>
                <Link to="/logout" />
              </Menu.Item>
            </Menu>
          </Sider>
          </MediaQuery>
          <MediaQuery maxWidth={992}>
          <Sider
            collapsible
            collapsed={true}
            onCollapse={this.onCollapse}
          >
            <div className="logo"><ItemLogo /></div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <HomeOutlined />
                <span>Home</span>
                <Link to="/" />
              </Menu.Item>
                <SubMenu key="sub1" icon={<LineChartOutlined />} title="Navigation One">
                  <Menu.Item key="1.1">Option 1<Link to="/option1" /></Menu.Item>
                  <Menu.Item key="1.2">Option 2<Link to="/option2" /></Menu.Item>
              </SubMenu>
              <Menu.Item key="3">
              <UserOutlined />
                <span>Navigation Two</span>
                <Link to="/item" />
              </Menu.Item>
              <Menu.Item key="5" onClick={logout()}>
              <LogoutOutlined />
                <span>Logout</span>
                <Link to="/logout" />
              </Menu.Item>
            </Menu>
          </Sider>
          </MediaQuery>
          <Layout>
            <Header style={{ background: "#fff", padding: 0, paddingLeft: 16 }}>
            <MenuFoldOutlined
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                style={{ cursor: "pointer" }}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              <Switch>
                <Route path="/" exact component={withAuth(Home)} />
                <Route path="/option1" exact component={withAuth(Option1)} />
                <Route path="/option2" exact component={withAuth(Option2)} />
                <Route exact path="/item/new" component={withAuth(ItemForm)} />
                <Route exact path="/item/:itemId" component={withAuth(ItemInfo)} />
                <Route path="/item" component={withAuth(Items)} />
                <Route path="/logout" component={Logout} />
              </Switch>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Feralbyte ©2021
            </Footer>
          </Layout>
        </Layout>
      </Router>
  )} else {
    return <Redirect to="/login" />;
      } 
    }
  }

