import React, { Component } from 'react';
import './App.css';
import Login from './login'
import Register from './register';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoginActive:true,
        }
    }

    changeState(){
        const {isLoginActive}=this.state;
         
    }
  render() {
      const isLoginActive=this.state;
      const current=isLoginActive ? "Register":"Login";
      const currentActive=isLoginActive? "Login":"Register ";
    return (
      <div>
          <div  className='login'>
              <div className='container'>
                {isLoginActive&& <Login createRef={(ref)=>this.current=ref}/>}
                {!isLoginActive&& <Register createRef={(ref)=>this.current=ref}/>}
              </div>
              <RightSide current={current} createRef={ref=> this.rightSide=ref} onClick={this.changeState.bind(this )}/>
          </div>
      </div>
    )
  }

  
}
const RightSide = props =>{
    return <div className='right-side' ref='props.createRef' onClick='props.onClick'>
       <div className='inner-container'>
           <div className='text'>{props.current}</div>
       </div>
    </div>
}