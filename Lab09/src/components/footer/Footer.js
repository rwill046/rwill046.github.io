//Rohaan Williams
import React, { Component } from 'react';
import Logo from './logo.png';
import './footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="Footer">
                <footer className="footer">
                <div className="container-fluid padding">
                    <div className = "row text-center">
                        <div className = "col-xl-4"> 
                            <img src={Logo} className="logo" alt="Logo"/> 
                            <hr className = "light" /> 
                            <p><span className="fontChange">deldes@gmail.com</span></p>
                            <p><span className="fontChange">+1-(613)-700-7777</span></p>
                        </div>
                        <div className = "col-lg-6 col-xl-4">
                            <br /> 
                            <hr className = "light" /> 
                            <h5> Operating Hours</h5>
                            <hr className = "light" /> 
                            <p style={{color: "white"}}>Mon-Fri: 9am - 6pm</p>
                            <p style={{color: "white"}}>Sat,Sun: 11am - 6pm</p>
                        </div>
                        <div className = "col-lg-6 col-xl-4">
                            <br /> 
                            <hr className = "light" /> 
                            <h5> Language Select </h5>
                            <hr className = "light" /> 
                            <div id="google_translate_element"></div>
                        </div>
                    </div>
                <div className = "col-lg-12">
                    <hr className = "light" />
                    <h5>Designed by: Rohaan Williams (#300010136)</h5>
                </div>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer;