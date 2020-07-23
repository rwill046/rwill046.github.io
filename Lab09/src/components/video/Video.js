//Rohaan Williams
import React from 'react';
import vid from './vid.mp4';
import './Video.css'

const Video = props => {
    return(
        <div className="Video">
        <div className="container-fluid">
            <h2>
                <i className="fas fa-play"></i> <u>{props.message}</u><br />
                <video width="950" height="475" controls>
                    <source src={vid} type="video/mp4" />
                </video>
                <br/>
                <u>STRAWBERRY PIE</u>
                <br/>
                <span style={{"color":"black"}}>A delicious Pie made of strawberries, prepared in 30 mins.</span>
            </h2>
            </div>
        </div>
    )
}

export default Video;