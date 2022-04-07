import React, { Component } from 'react'
import loginimg from './img/1.jpeg'
import {FaEye,FaEyeSlash} from 'react-icons/fa'


export default class Register extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return <div className='base-container' dir='rtl' ref='this.props.createRef'>
        <h3 className='header'>رایگان ثبت نام کنید</h3>
        <div className='content'>
            <div className='image'>
                <img src={loginimg}/>
            </div>

            <div className='form'>
                <div className='line-double'>
                    <input type='text' placeholder='نام*' name='username' required/>
                    <input type='text' placeholder='نام خانوادگی*' name='familyname' required/>
                </div>

                <div className='line-single'>
                    <input type='url' placeholder='پست الکترونیک*' name='e-mail' required/>
                </div>

                <div className='line-single'>
                    <input type="password"  placeholder='کلمه عبور*' name='password' required></input>
                </div>
                
                <div className='line-single'>
                <input type='text' placeholder='تحصیلات' name='e-mail' required/>
                </div>
                
                <div className='line-double'>
                <input type='text' placeholder='استان' name='e-mail' required/>
                <input type='text' placeholder='شهر' name='e-mail' required/>
                </div>

                <input type='submit' value='ثبت نام'/>
            </div>
        </div> 
    </div>
   }
}

