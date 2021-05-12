import React, {Component} from 'react';
import axios from 'axios';
import '../styles/App.css';
import Cookies from 'js-cookie';
import 'antd/dist/antd.css';
import '../styles/index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
        email:'',
        password: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      console.log(this.state);
    }

  //Get input
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value,
    });
    console.log(this.setState)
  }

  //Submit to log in
  handleSubmit(event) {
    event.preventDefault();
    const request = {
      email: this.state.email,
      password: this.state.password
    };
    const history = this.props.history;
    axios.post('http://localhost:3000/api/authenticate', request,  {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        Cookies.set('token', res.data.token)
        Cookies.set('loggedIn', true);
        history.push('/');
        alert(res.data.message);

      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch( err => {
      console.log(err);
    })
    this.clear();
  }

  //Clean form after submit
  clear = () =>{
    this.setState({
      email: "",
      password: "" 
    });
  }

  //Render login form
  render() {
    return (
      <div className="box">
        <p className="title">Sign In</p>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} type="text" name="email" placeholder="Email"  value={this.state.email} onChange={this.handleChange}/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password" name="password"
              placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleSubmit}>
              Log in
            </Button>
            Or<Link to="/register"> register now!</Link>
          </Form.Item>
        </Form>
        <a className="" href="http://localhost:5000/forgotpassword">
          Forgot password?
        </a>
      </div>
    );
  };
}  
export default LoginForm;

