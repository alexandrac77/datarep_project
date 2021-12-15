import React, { Component } from 'react';
import vegan from './images/vegan.jpg'; // with import
import '../index.css';
//
class Home extends Component {
    render() {
        return (
            <div id="homepg" style={{
                backgroundColor: 'LavenderBlush',
                height:'700px', fontFamily:"Abril Fatface"
              }}>
                <h1 font="Abril Fatface">Vegan Restaurants in Galway</h1>
                <img height="500" src={vegan}/>
                <h2></h2>
            </div>
        );
    }
}
export default Home;