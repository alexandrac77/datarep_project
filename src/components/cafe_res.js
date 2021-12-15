import React, { Component } from 'react';
import '../index.css';
import Cafes from './cafes';
import Review from './review'
import axios from 'axios';
import milano from './images/milano.jpg'; // with import
import templee from './images/templee.jpg'; // with import
import greens from './images/greens.jpg'; // with import
import lighthouse from './images/lighthouse.jpg'; // with import
import vegano from './images/vegano.jpg'; // with import

class CafeRes extends Component
{
    state = {
        mycafes: []            
    };
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/cafes')
        .then((response)=>{
            this.setState({mycafes: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
        
    } 

    componentDidMount(){
        axios.get('http://localhost:4000/api/cafes')//cafes
        .then((response)=>{
            this.setState({mycafes: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    };


    render(){
        return(
            <div>
            <div
            style={{
                backgroundColor: 'Olive', height:"90px" ,fontFamily:"Abril Fatface"}}>
                <h1>Top Vegan Cafes & Restaurants in Galway</h1>
            </div>

            <div style={{color:'Olive'}}>
                <br/>
                <h4>scroll to the bottom of the page to see reviews </h4>
                <h4>for the featured cafes & restaurants </h4>
                <br/>
            </div>

            <div style={{
                backgroundColor: 'LightGrey',
                fontFamily:"Meow Script"}}>
                <br/>
                <br/>
                <h1>Milano</h1>
                <br/>
                <img height="500" src={milano}/>
                <br/>
                <br/>
                <br/>
            </div>

            <div style={{
                backgroundColor: 'Linen',
                fontFamily:"Meow Script"}}>
                <h1>Temple Cafe</h1>
                <br/>
                <img height="500" src={templee}/>
                <br/>
                <br/>
                <br/>
            </div>

            <div
            style={{
                backgroundColor: 'LightGrey',
                fontFamily:"Meow Script"}}>
                <h1>Vegano Deli</h1>
                <br/>
                <img height="500" src={vegano}/>
                <br/>
                <br/>
                <br/>
            </div>

            <div
            style={{
                backgroundColor: 'Linen',
                fontFamily:"Meow Script"}}>
                <h1>Lighthouse Cafe</h1>
                <br/>
                <img height="500" src={lighthouse}/>
                <br/>
                <br/>
                <br/>
            </div>

            <div
            style={{
                backgroundColor: 'LightGrey',
                fontFamily:"Meow Script"}}>
                <h1>Greens & Co</h1>
                <br/>
                <img height="500" src={greens}/>
                <br/>
                <br/>
                <br/>
            </div>

            <div>
            <br/>
            <br/>
            <br/>
                <h2> Customer Reviews</h2>
            </div>

                <div><Cafes restaurants={this.state.mycafes} ReloadData={this.ReloadData}></Cafes></div>

            </div>
        );
    }
}
export default CafeRes;