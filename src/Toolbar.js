import React, { Component } from 'react';
import { connect } from "react-redux";
import './css_doc/Toolbar.css';
import logo from "./sushi_assets/logo.png";
import {Link} from 'react-router-dom';

class Toolbar extends Component {
  constructor(){
    super();
    this.navListener = this.navListener.bind(this);
    this.cntMenu = this.cntMenu.bind(this);
    this.state = {
      cart:[],
    }
  }
  componentDidMount(){
    this.navListener();
  }
  componentWillUnmount(){
    this.navListener();
  }
  cntMenu(arr){
    let cnt = 0;
    arr.map(item=>{
      cnt+=item.cnt;
    })
    return cnt;
  }
  navListener(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.toolbar_selection');
    const navLi = document.querySelectorAll('.toolbar_selection li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-act');
        burger.classList.toggle('close');
    })
    navLi.forEach((item,i)=>{
      item.style.animation = `navLi 0.5s ease-in forwards ${i/7 + 1}s`;
      item.addEventListener('click',()=>{
        nav.classList.toggle('nav-act');
        burger.classList.toggle('close');
      })
    })
    
   
  }
  render() {
    return (
      <div>
        
        
        <nav className = 'toolbar_nav'>
           <div className = 'logo'>
             <img src = {logo} width='100' height='75'/>
            
             {/* <img style = {{paddingRight:5}} src = {require()} width='40' height='35'/> */}  
           </div>
              

           


              <ul className = 'toolbar_selection'>
                <li>
                 {/* <i class = 'mdi mdi-home' style={{color:'white',fontSize:'medium',paddingRight:'2px'}}></i> */}
                 <Link to='/ChinaGateDemoSite/'>Home</Link>
                </li>
                <li>
                  {/* <i class ='mdi mdi-account-box' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i> */}
                  <Link to='/ChinaGateDemoSite/About'>About</Link>
                </li>
                <li>
                {/* <i class ='mdi mdi-apps' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i> */}
                <Link to='/ChinaGateDemoSite/Menu'>Menu</Link>
                </li>
                <li>
                {/* <i class ='mdi mdi-file-document' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i> */}
                <Link to='/ChinaGateDemoSite/Contact'>Contact</Link>
                </li> 
                <li>
                {/* <i class ='mdi mdi-file-document' style={{color:'white',fontSize:'medium',paddingRight:'2px'}} ></i> */}
                <Link to='/ChinaGateDemoSite/Cart'>{this.props.carts.length > 0? <span style = {{color : 'red', fontSize:'25px'}}>Cart({this.cntMenu(this.props.carts)})</span> : `Cart`}</Link>
                </li> 
                <li>
                <button className = "log-in-butn" href='/Login'>Login</button>
                </li>
              </ul>
           
         
          <div className = 'burger'>
                <div className ='line_one'></div>
                <div className ='line_two'></div>
                <div className ='line_three'></div>

              </div>
             
  
          </nav>
         

          </div>   
               
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carts: state.carts
  };
}

export default connect(
  mapStateToProps,
)(Toolbar)