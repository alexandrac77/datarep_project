import React, { Component } from 'react';
import axios from 'axios';



class Review extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCafeName = this.onChangeCafeName.bind(this);
        this.onChangeCafeDesc = this.onChangeCafeDesc.bind(this);
        this.onChangeCafeRating = this.onChangeCafeRating.bind(this);
        this.state = {
            Name: '',
            Desc: '',
            Rating: ''
        }
    }


    handleSubmit(event) {
        console.log(
            "Name: " + this.state.Name +
            "Desc: " + this.state.Desc +
            "Rating: " + this.state.Rating);

        const NewCafe = {
            Name: this.state.Name,
            Desc: this.state.Desc,
            Rating: this.state.Rating
        }

        axios.post('http://localhost:4000/api/cafes', NewCafe)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err);
            })

        event.preventDefault();
        this.setState({
            Name: '',
            Desc: '',
            Rating: ''
        });
    }
    onChangeCafeName(event) {
        this.setState({
            Name: event.target.value
        })
    }
    onChangeCafeDesc(event) {
        this.setState({
            Desc: event.target.value
        })
    }
    onChangeCafeRating(event) {
        this.setState({
            Rating: event.target.value
        })
    }




    render() {
        return (

            <div
            style={{
                backgroundColor: 'Lavender', height:"90px" ,fontFamily:"Abril Fatface"}}>
                <h1>Write a Review</h1>
                <h5>detail your experience(s) at the top vegan cafes / retaurants in Galway.</h5>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <h3>Restaurant Name</h3>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeCafeName}
                            onChangeText = {(text)=> this.setState({Name:text})} />
                    </div>

                    <div>
                        <h3>Description</h3>
                        <input type="text"
                            className="form-control"
                            value={this.state.Desc}
                            onChange={this.onChangeCafeDesc}/>
                    </div>

                    <div>
                        <h3>Rating (out of 10)</h3>
                        <input type="text"
                            className="form-control"
                            value={this.state.Rating}
                            onChange={this.onChangeCafeRating}/>
                    </div>

                    <div>
                        <input 
                        type="submit" value="Submit Review"
                            className="btn btn-danger"></input>
                    </div>
                </form>
            </div>
        );


    };

}

export default Review;