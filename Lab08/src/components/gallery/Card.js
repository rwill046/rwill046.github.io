import React from 'react';
import './Card.css';

const Card = props => {
    console.log(props);
    return(
        <div className="col-lg-3 paddy">
            <div className="zoomImage"><img src={props.image} className="desImage"  alt="Dessert"></img></div>
        </div> 
    )
}
export default Card;
