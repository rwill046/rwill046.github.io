//Rohaan Williams
import React from 'react';
import './Invalid.css'

const Invalid = props => {
    return(
        <div className="Invalid">
            <h2>
                <i class="fas fa-exclamation-circle"></i>  {props.message}<br />
                A helpful link to get you home: <a className="inHyp" href="/"><i class="fas fa-home"></i></a>
            </h2>
        </div>
    )
}

export default Invalid;