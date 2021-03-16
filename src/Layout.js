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
import {TOGGLE_CLOSE} from './constants/action-types';



class Layout extends Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onLoginSuccess = this.onLoginSuccess.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
        this.startLoading = this.startLoading.bind(this);
        this.finishLoading = this.finishLoading.bind(this);
        this.afterTabsChange = this.afterTabsChange.bind(this);

        this.state = {
          showModal: false,
          loading: false,
          error: null
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
     
      onLoginSuccess(method, response) {
        console.log("logged successfully with " + method);
      }
     
      onLoginFail(method, response) {
        console.log("logging failed with " + method);
        this.setState({
          error: response
        });
      }
     
      startLoading() {
        this.setState({
          loading: true
        });
      }
     
      finishLoading() {
        this.setState({
          loading: false
        });
      }
     
      afterTabsChange() {
        this.setState({
          error: null
        });
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
                            <input type = 'text'  className = 'field' placeholder = 'enter your username'/>
                          </div>
                          <div className = 'input-icon-2'>
                            <i class="mdi mdi-lock"></i>
                            <input type = 'password'  className = 'field' placeholder = 'enter your password'/>
                          </div>
                          <div className = 'forget-password'>
                            <span>Forget Password?</span>
                          </div>
                          <div className = 'signin-btn'>
                            <button>Log in</button>
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