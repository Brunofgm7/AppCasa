import React, {Component} from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import '../styles/App.css';

class Logout extends Component {
      //Set default message
      state = {
        navigate: false
      };

    //Remove token and loggedIn status from Cookies
    logout = () => {
        Cookies.remove("loggedIn");
        Cookies.remove("token");
        this.setState({navigate: true});
    };

    refreshPage() {
      window.location.reload(false);
    }

    // Render logout confirmation
    render() {
      const { navigate } = this.state;
      if (navigate) {
        return <Redirect to="/login" push={true} />;
      }
      return (
        <div className="container">
          <p>Are you sure you want to logout?</p>
          <Button type="link" onClick={(e) => { this.logout(e); this.refreshPage();}}>Logout</Button>
        </div> )
    }
}

export default Logout;