import React, { Component } from 'react';
import './css_doc/Footer.css';
import {Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default class Footer extends Component {
  constructor(){
    super();
    this.state = {
      isOpen:'',
    }
  }
  componentDidMount(){
    let currentD = new Date();
    let startHourD = new Date();
    startHourD.setHours('10','00','0'); 
    let endHourD = new Date();
    endHourD.setHours('21','00','0'); 
    if(currentD >= startHourD && currentD < endHourD){
      this.setState({isOpen:true});
    }else{
      this.setState({isOpen:false});
    }
  }
  //   super();
  //   this.setHeight = this.setHeight.bind(this)
  // }
  // componentDidMount(){
  //   this.setHeight();
  // }
  // setHeight(){
  //   let right=document.getElementById('second-div').style.height;
  //   let left=document.getElementById('first-div').style.height;
  //   console.log(right);
  //   console.log(left);
  //   if(left>right)
  //   {
  //       document.getElementById('second-div').style.height=left;
  //   }
  //   else
  //   {
  //       document.getElementById('first-div').style.height=right;
  //   }
  // }

  render() {
    return (
      <div className = 'footer-page'>
        <div className = "footer-container">
            <div id = 'first-div' className = 'first-element'>
              <div className = 'name-title'>China Gate Express</div>
              <div className = 'footer-desci'>2607 Santa Ana St. South Gate, CA 91733</div>
              <div className = "connect-footer">Connect</div>
              <div className = "icon-footer">
              <i class="mdi mdi-facebook-box"></i>
              <i class="mdi mdi-instagram"></i>
              <i class="mdi mdi-twitter-box"></i>
              <i class="mdi mdi-email"></i>
              </div>
            </div>
            <div id = 'second-div' className = 'second-element'>
              <div className = 'navi'>Navigation</div>
             
                  <Link to= '/ChinaGateDemoSite/'>Home</Link>
              
                  <Link to= '/ChinaGateDemoSite/About'>About</Link>
              
                  <Link to= '/ChinaGateDemoSite/Menu'>Menu</Link>
                
                  <Link to= '/ChinaGateDemoSite/Contact'>Contact</Link>
              
            </div>
            <div className = 'third-element'>
              <div id='contact-footer'>Contact</div>
              <div id = 'number_1'>+1(626)-244-9155</div>
              <div id = 'number_2'>+1(626)-248-9175</div>
              <div id = 'email'>zacyou151@yahoo.com</div>
            </div>
            <div className = 'fourth-element'>
               <div id = 'status'>Status</div>
               <div id = 'open-status'>We are <span style = {this.state.isOpen?{color:'green', fontWeight:'bold'}:{color:'red', fontWeight:'bold'}}>{this.state.isOpen?'OPEN':'CLOSED'}</span> now.</div> 
               <button id = 'hire-btn'>We Hire!</button>

            </div>
        </div>
        
        <div className = "copy-right">
           <span>© Copyright 2021 by<span style = {{color:'orange'}}> Zac You</span>. All rights reserved. </span>
        </div>
      </div>
    )
  }
}