import React, { Component } from 'react';
import axios from 'axios';


class Edit extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCafeName = this.onChangeCafeName.bind(this);
        this.onChangeCafeDesc = this.onChangeCafeDesc.bind(this);
        this.onChangeCafeRating = this.onChangeCafeRating.bind(this);
        //initialise Name Desc rating to empty string
        this.state = {
            Name: '',
            Desc: '',
            Rating: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/cafes/'+ this.props.match.params.id) //http request 
        .then((response)=>{
            this.setState({
                Name:response.data.Name,
                Desc:response.data.Desc,
                Rating:response.data.Rating,
                _id:response.data._id
            })
        })
        .catch();
    }

    //save changes when submit button is pressed
    handleSubmit(event) {
        console.log("Name: " +this.state.Name+
        " Desc: " + this.state.Desc +
        "Rating: " + this.state.Rating);

        const NewCafe = {
            Name: this.state.Name,
            Desc: this.state.Desc,
            Rating: this.state.Rating
        }

        axios.put('http://localhost:4000/api/cafes/' + this.state._id, NewCafe)
        .then((response)=>{console.log(response)})
        .catch();
        
        //prevent blank entry
        event.preventDefault();
        this.setState({
            Name:'',
            Desc:'',
            Rating:''
        });
    }
    
    //set name to user input
    onChangeCafeName(event) {
        this.setState({
            Name: event.target.value
        })
    }
    //set description to user input
    onChangeCafeDesc(event) {
        this.setState({
            Desc: event.target.value
        })
    }
    //set rating to user input
    onChangeCafeRating(event){
        this.setState({
            Rating: event.target.value
        })
    }

    render() {
        return (
            <div
            style={{
                backgroundColor: 'Lavender', height:"90px" ,fontFamily:"Abril Fatface"}}>
                <h1>Edit Review</h1>
                <p>Make changes to your review below & press submit when finished to save.</p>
                <br/><br/>
                <form onSubmit={this.handleSubmit}>
                    
                    <div className="form-group" style={{color:'red'}}>
                        <h3>Edit Cafe Name: </h3>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeCafeName}
                        />
                    </div>
                    <div className="form-group" style={{color:'red'}}>
                        <h3>Edit Description: </h3>
                        <input type="text"
                            className="form-control"
                            value={this.state.Desc}
                            onChange={this.onChangeCafeDesc}
                        />
                    </div>
                    <div className="form-group" style={{color:'red'}}>
                        <h3>Edit Rating: </h3>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Rating}
                            onChange={this.onChangeCafeRating}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Submit"
                            className="btn btn-danger"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;
