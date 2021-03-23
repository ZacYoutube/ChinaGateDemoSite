import Toolbar from './Toolbar';
import Footer from './Footer';
import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './css_doc/layout.css';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Cart from './Cart';
import Contact from './Contact';
import ReactModalLogin from "react-modal-login";
import Modal from './Login_Modal.js';
import { connect } from "react-redux";
import logo from "./sushi_assets/logo.png";
import {TOGGLE_CLOSE} from './constants/action-types';


let input_arr = [];
class Layout extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onChange = this.onChange.bind(this);
        this.login = this.login.bind(this);

        this.state = {
          showModal: false,
          username: '',
          password: ''
        };
      }
      openModal() {
        this.setState({
          showModal: true
        });
      }
     
      closeModal() {
        this.setState({
          showModal: false,
          error: null
        });
      }

      onChange(i, e){
        e.preventDefault();
        input_arr[i] = e.target.value; 
        if(input_arr.length > 2){
          input_arr = [];
        }
        this.setState({username : input_arr[0]});
        this.setState({password : input_arr[1]});
       
      }
      login(){
        
      }
     
    
    render() {
        return (
            <Router>

            <div>
                <div className = "layout-container">
                    <div className = "layout-header"><Toolbar/></div>
                    <Switch>
                        <Route path='/' exact strict component={Home} />
                        <Route path='/ChinaGateDemoSite/' exact strict component={Home} />
                        <Route path='/ChinaGateDemoSite' exact strict component={Home} />
                        <Route path='/ChinaGateDemoSite/About' exact strict component={About} />
                        <Route path='/ChinaGateDemoSite/Menu' exact strict component={Menu} />
                        <Route path='/ChinaGateDemoSite/Cart' exact strict component={Cart} />
                        {/* <Route path='/ChinaGateDemoSite/Login' exact strict component={Login} /> */}
                        <Route path='/ChinaGateDemoSite/Contact' exact strict component={Contact} />
                    </Switch>
                   
                    <div className = "layout-main">{this.props.children}</div>
                    <div className = 'login-modal'>
                      <Modal show = {this.props.isOpen} handleClose = {() => this.props.toggle_close()}>
                         <h1> Sign In</h1>
                          <div className = 'input-icon-1' >
                            <i class="mdi mdi-account"></i>
                            <input type = 'text'  onChange = {(e)=> this.onChange(0, e)} className = 'field' placeholder = 'enter your username'/>
                          </div>
                          <div className = 'input-icon-2'>
                            <i class="mdi mdi-lock"></i>
                            <input type = 'password'  onChange = {(e)=> this.onChange(1, e)} className = 'field' placeholder = 'enter your password'/>
                          </div>
                          <div className = 'forget-password'>
                            <span>Forget Password?</span>
                          </div>
                          <div className = 'signin-btn'>
                            <button onClick = {this.login}>Log in</button>
                          </div>

                          <div className = 'or'>
                            OR
                          </div>

                          <div className = 'signup-btn'>
                            <button>Sign up</button>
                          </div>

                        
                           
                        
                         

                      </Modal>
                    {/* <ReactModalLogin
                        visible={this.props.isOpen}
                        onCloseModal={() => this.props.toggle_close()}
                        loading={this.state.loading}
                        error={this.state.error}
                        tabs={{
                            afterChange: this.afterTabsChange.bind(this)
                        }}
                        loginError={{
                            label: "Couldn't sign in, please try again."
                        }}
                        registerError={{
                            label: "Couldn't sign up, please try again."
                        }}
                        startLoading={this.startLoading.bind(this)}
                        finishLoading={this.finishLoading.bind(this)}
                        form = {{
                            loginBtn:{
                                label: 'Login',
                                buttonClass : 'btn-login-container'
                            },
                            loginInputs:[
                                {
                                    type: 'text',
                                    placeholder: 'enter username',
                                    label: 'Username',
                                    // containerClass:'input-field'
                                },
                                {
                                    type: 'password',
                                    placeholder: 'enter password',
                                    label: 'Password',
                                    // containerClass:'input-field'
                                }
                                
                            ],
                            loginContainerClass: 'login-form-container',
                            

                        }}
                        tabs = {{
                        }}
                        overlayClass = 'overlay'
                        /> */}
                    </div>
                   
                    <div className = "layout-footer"><Footer></Footer></div>
                    <br clear="both"/>

                    
                </div>
              
               
            </div>
            

           
            </Router>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      isOpen: state.isOpen
    };
  }
  const mapDispatchToProps = dispatch =>{
    return {
      toggle_close: () =>{
        dispatch({type:TOGGLE_CLOSE})
      }
    }
  }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Layout)