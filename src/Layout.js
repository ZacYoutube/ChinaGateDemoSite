import Toolbar from './Toolbar'
import Footer from './Footer'
import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './css_doc/layout.css';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Login from './Login';
import Cart from './Cart';

export default class Layout extends Component {
    render() {
        console.log(this.props.children);
        return (
            <Router>

            <div>
                <div className = "layout-container">
                    <div className = "layout-header"><Toolbar/></div>
                    <Switch>
                        <Route path='/' exact strict component={Home} />
                        <Route path='/About' exact strict component={About} />
                        <Route path='/Menu' exact strict component={Menu} />
                        <Route path='/Cart' exact strict component={Cart} />
                        <Route path='/Login' exact strict component={Login} />
                    </Switch>
                    <div className = "layout-main">{this.props.children}</div>
                    <div className = "layout-footer"><Footer></Footer></div>
                    <br clear="both"/>
                </div>
              
               
            </div>
            </Router>
        )
    }
}