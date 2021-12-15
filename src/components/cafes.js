import React, { Component } from 'react';
import CafeItem from './deletereview';

class Cafes extends Component
{
    render(){
        return this.props.restaurants.map((restaurant)=>{
            return <CafeItem cafe={restaurant} key={restaurant._id} ReloadData={this.props.ReloadData}></CafeItem>
        })
    }
}
export default Cafes;