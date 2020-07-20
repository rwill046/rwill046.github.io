import React, { Component } from 'react';
//import Image from './Image';
import Img1 from './des1.jpeg';
import Img2 from './des2.jpeg';
import Img3 from './des3.jpeg';
import Img4 from './des4.jpeg';
import Img5 from './des5.jpeg';
import Img6 from './des6.jpeg';
import Img7 from './des7.jpeg';
import './Gallery.css';

class Gallery extends Component{
    render(){
        return(
            <div className="container-fluid p-2">
                <div className="row">
                    <div className="col-sm-3">
                        <img src={Img1} alt=""></img>
                    </div>
                    <div className="col-sm-3">
                        <img src={Img2} alt=""></img>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Img4} alt=""></img>
                            </div>
                            <div className="col-sm-6">
                                <img src={Img5} alt=""></img>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={Img6} alt=""></img>
                            </div>
                            <div className="col-sm-6">
                                <img src={Img7} alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <img src={Img3} alt=""></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;