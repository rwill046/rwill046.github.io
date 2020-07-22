import React from 'react';
import UserInfo from './UserInfo';
import './Help.css';

const Help = props => {
    return(
        <div className="Help">
            <h2 style={{"textAlign" : "left"}}>
                <u>{props.message}</u><br /><br />
                <u>Navigation that may help you.</u><br />
                - A helpful link to get you home: <a className="inHyp" href="/"><i className="fas fa-home"></i></a><br /><br />
                - If you would like to check out a sample video tutorial, we have one ready for you: <a className="inHyp" href="/video"><i className="fas fa-play"></i></a><br /><br />
                - To view our operating hours or change the language of the webpage, please scroll to the bottom of the page.<br /><br />
                <hr></hr>
                <u>If you have any further enquireies, please fill in the following details so we can get back to you.</u>
                <hr />
                <UserInfo />
            </h2>
        </div>
    )
}

export default Help;