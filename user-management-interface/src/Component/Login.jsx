import React from "react";
import MasterComponent, { PUT, setCookies, TOKEN_COOKIES, wsCallingWithBody, wsWithBody } from "../Master/MasterComponent";
import swal from 'sweetalert';
import LoadingButton from "../Master/LoadingLib/LoadingButton";


class Login extends MasterComponent {
  state = {
    isLogin: undefined,
    isValid: undefined,
    isLoading: false,
    lblName: '',
    lblPassword: ''
  }
  constructor(props) {
    super(props);
  }

  clickMe = () => {
    this.setState({ isLoading: true })
    wsWithBody("/api/authenticationCtl/loginOauth", PUT, {
      userId: this.state.lblName,
      userPassword: this.state.lblPassword
    }, null).then(res => {
      if (res.data != undefined) {
        this.setState({ isLoading: false });
        setCookies(TOKEN_COOKIES, res.data);
        swal({
          title: "Login Success",
          text:"Anda Akan Langsung Diarahkan Ke Dashboard",
          icon: "success",
          button: "OK",
        });
        this.props.history.push("/");
      }
    }).catch(error=>{
      debugger;
      swal({
        title: error.response.data.error,
        text: error.response.data.error_description,
        icon: "error",
        button: "Kembali",
      });
      this.setState({ isLoading: false });
    })
  }

  render() {
    return (
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
              <h3>Sign In</h3>

              <div className="form-group">
                <label>User Id</label>
                <input type="text"
                  value={this.state.lblName}
                  onChange={(event) => this.setState({ lblName: event.target.value })}
                  className="form-control" placeholder="Masukkan User Id" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password"
                  value={this.state.lblPassword}
                  onChange={(event) => this.setState({ lblPassword: event.target.value })}
                  className="form-control" placeholder="Masukkan Password" />
              </div>

            </form>

            <LoadingButton onClick={this.clickMe} buttonname="Submit"
              valueloading={this.state.isLoading}
              loadingtext="Loading Validasi Data Anda"
              className="btn btn-primary btn-block" />


            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>


          </div>
        </div>
      </div>
    );
  }

}


export default Login;