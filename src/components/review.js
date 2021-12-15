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
            " Desc: " + this.state.Desc +
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

            <div>
                <h1>write review</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        
                            
                                name
                                <input type="text"
                                    className="form-control"
                                    value={this.state.Name}
                                    onChange={this.onChangeCafeName}
                                    onChangeText = {(text)=> this.setState({Name:text})} />
                                
                            
                        
                    </div>
                    <div>
                                desc
                                <input type="text"
                                    className="form-control"
                                    value={this.state.Desc}
                                    onChange={this.onChangeCafeDesc}
                                />
                    
                    </div>
                    <div>
                        rating
                        <input type="text"
                                    className="form-control"
                                    value={this.state.Rating}
                                    onChange={this.onChangeCafeRating}
                                />
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