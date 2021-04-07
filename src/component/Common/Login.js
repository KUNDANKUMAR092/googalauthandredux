import React, { Component } from 'react';
import './style/loginStyle.css';

import authFirebase from '../Auth/googalAuthFirebase';

class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            email: "",
            password: ""
        }
    }
    login(e){
        e.preventDefault();
        authFirebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
            console.log(user);
        }).catch((err)=>{
            console.log(err)
        })
    }

    signup(e){
        e.preventDefault();
        authFirebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user)=>{
            console.log(user);
        }).catch((err)=>{
            console.log(err)
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }



    render() {
        return (
            <div>
                <div className="login_form_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 col-md-offset-2">
                                <div className="login_wrapper">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6"> <a href="#" className="btn btn-primary facebook"> <span>Login with Facebook</span> <i className="fa fa-facebook"></i> </a> </div>
                                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6"> <a href="#" className="btn btn-primary google-plus"> Login with Google <i className="fa fa-google-plus"></i> </a> </div>
                                    </div>
                                    <h2>or</h2>
                                    <form>
                                        <div className="formsix-pos">
                                            <div className="form-group i-email"> 
                                                <input type="email" className="form-control" required="" id="email2" placeholder="Email Address *" name="email" value={this.state.value} onChange={this.handleChange} /> 
                                            </div>
                                        </div>
                                        <div className="formsix-e">
                                            <div className="form-group i-password"> 
                                                <input type="password" className="form-control" required="" id="password2" placeholder="Password *" name="password" value={this.state.password} onChange={this.handleChange} /> 
                                            </div>
                                        </div>
                                        {/* <div className="login_remember_box"> 
                                            <label className="control control--checkbox">
                                                Remember me 
                                                <input type="checkbox" /> 
                                                <span className="control__indicator"></span> 
                                            </label> 
                                            <a href="#" className="forget_password"> Forgot Password </a> 
                                        </div> */}
                                        {/* <div className="login_btn_wrapper"> 
                                            <button className="btn btn-primary login_btn" onClick={this.login} > Login </button> 
                                        </div> */}
                                        <div className="login_btn_wrapper"> 
                                            <button className="btn btn-primary login_btn" onClick={this.signup}> Sign up </button> 
                                        </div>
                                    </form>
                                    <div className="login_message">
                                        <p>Don’t have an account ? <a href="#"> Sign up </a> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;