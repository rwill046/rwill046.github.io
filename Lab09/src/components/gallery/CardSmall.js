//Rohaan Williams
import React from 'react';
import './Card.css';

const CardSmall = props => {
    console.log(props);
    return(
        <div className="col-lg-6 paddy">
            <div className="zoomImage"><img src={props.image} className="desImage"  alt="Dessert"></img></div>
        </div> 
    )
}
export default CardSmall;
