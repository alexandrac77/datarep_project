import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import lemon from './images/lemon.jpg'; // with import
import brownies from './images/brownies.jpg'; // with import
import mint from './images/mint.jpg'; // with import
import banana from './images/banana.jpg'; // with import
import chocolate from './images/chocolate.jpg'; // with import

//
class Recipes extends Component {
    render() {
        return (
            <div id="recipes" style={{backgroundColor: 'Thistle', fontFamily:"Abril Fatface"}}>
                <h1 font="Abril Fatface">Fun Vegan Recipes</h1>
                <br/>
                <h4 style={{color:'Olive'}}>Try these delicious plant-based recipes at home</h4>
                <h4 style={{color:'Olive'}}>click on the image to be redirected to the recipe</h4>
                <br/><br/><br/>

                //link within image so when image is pressed, it redirects to website containing recipe
                <a href="https://www.bbcgoodfood.com/recipes/raw-lemon-cheesecake">
                <img src={lemon}></img></a>
                <a href="https://www.bbcgoodfood.com/recipes/vegan-cherry-almond-brownies">
                <img src={brownies}></img></a>
                <a href="https://thehappypear.ie/recipes/our-favourite-chocolate-cake/">
                <img src={chocolate} height="341" width="375"></img></a>

                <br/><br/>

                <a href="https://lovingitvegan.com/vegan-mint-chocolate-chip-ice-cream/">
                <img src={mint} height="341" width="375"></img></a>
                <a href="https://simple-veganista.com/vegan-banana-tea-bread/">
                <img src={banana} height="341" width="375"></img></a>
                <br/><br/>
             
            </div>
        );
    }
}
export default Recipes;
