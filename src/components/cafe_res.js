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
                backgroundColor: 'Olive', height:"50px" ,fontFamily:"Abril Fatface"}}>

                <h1>Top Vegan Cafes & Restaurants in Galway</h1>
                {/*{this.state.mycafes.map(restaurant=><li key={restaurant._id}></li>)} */}
                <Cafes restaurants={this.state.mycafes} ReloadData={this.ReloadData}></Cafes>

            </div>
                <br></br>
                <br></br>
            <div style={{
                fontFamily:"Meow Script"}}>
                <h1>Milano</h1>
                <img height="500" src={milano}/>
            </div>

            <div>
                <h1>Temple Cafe</h1>
                <img height="500" src={templee}/>
            </div>
            <div>
                <h1>Greens & Co</h1>
                <img height="500" src={greens}/>
            </div>

            <div>
                <h1>Vegano Deli</h1>
                <img height="500" src={vegano}/>
            </div>

            <div>
                <h1>Lighthouse Cafe</h1>
                <img height="500" src={lighthouse}/>
            </div>
            </div>
        );
    }
}
export default CafeRes;