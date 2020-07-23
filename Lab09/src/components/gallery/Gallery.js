//Rohaan Williams
import React, { Component } from 'react';
import Card from './Card';
import CardSmall from './CardSmall';
import muffin from './des1.jpeg';
import donut from './des2.jpeg';
import pie1 from './des3.jpeg';
import pie2 from './des4.jpeg';
import strawberry from './des5.jpeg';
import cake from './des6.jpeg';
import macaroon from './des7.jpeg';
import './Gallery.css';

class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayRecipes: false,
            recipes: ""
        }
    }

    onClick = (id) => {
        console.log(this.state.recipes);
        this.setState({
            displayRecipes : true
        })
    }

    render(){
        return(
            <div className="Gallery">
                <div className="container-fluid">
                    <div className="row">
                        <Card image={muffin} title={"Muffin"} id={1} onClick={this.onClick} />
                        <Card image={donut} title={"Donut"} id={2} onClick={this.onClick} />
                        <div className="col-lg-3">
                            <div className="row">
                                <CardSmall image={pie2} title={"Blueberry Pie"} id={4} onClick={this.onClick} />
                                <CardSmall image={cake} title={"Chocolate Cake"} id={5} onClick={this.onClick} />
                            </div>
                            <div className="row">
                                <CardSmall image={macaroon} title={"Macaroon"}id={6} onClick={this.onClick} />  
                                <CardSmall image={strawberry} title={"Strawberry Cake"} id={7} onClick={this.onClick} />
                            </div>
                        </div>
                        <Card image={pie1} title={"Strawberry Pie"} id={3} onClick={this.onClick} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery;