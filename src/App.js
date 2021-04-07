import React, { Component } from 'react';
import Login from './component/Common/Login';
import Home from './component/Details/Home';

import authFirebase from './component/Auth/googalAuthFirebase';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user: {}
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    authFirebase.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({user});
      }else{
        this.setState({user: null});
      }
    })
  }


  render() {
    return (
      <div className="App">
        {this.state.user ? (<Home/>) : (<Login />) }
      </div>
    );
  }
}

export default App;