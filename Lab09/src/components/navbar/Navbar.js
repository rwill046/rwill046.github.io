//Rohaan Williams
import React, { Component } from 'react';
import Logo from './logo2.png';
import './Navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid p-0">
                        <nav className="navbar navbar-expand-lg navbar-dark">
                            <div className="w-100 order-1">
                            <a className="navbar-nav navbar-collapse mr-auto" href="/"><img className="delLogo" src={Logo} alt="Logo"></img></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navit">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            </div>
                            <div className="collapse navbar-collapse w-100 order-2">
                            <a className="navbar-brand text-center mx-auto" href="/"><h1>DELICIOUS DESSERTS</h1></a>
                            </div>
                            <div className="w-100 order-3">
                            <div className="collapse navbar-collapse" id="navit">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active"><a className="nav-link" href="/">HOME</a></li>
                                    <li className="nav-item"><a className="nav-link" href="/help">HELP</a></li>
                                </ul>
                            </div>
                            </div>
                        </nav>
                </div>
            </div>
        )
    }
}

export default Navbar;