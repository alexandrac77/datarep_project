import React, { Component } from 'react';
import axios from 'axios';


class Edit extends Component {
    constructor() {
        super();
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

    componentDidMount(){
        axios.get('http://localhost:4000/api/cafes/'+ this.props.match.params.id)
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
        

        event.preventDefault();
        this.setState({
            Name:'',
            Desc:'',
            Rating:''
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
    onChangeCafeRating(event){
        this.setState({
            Rating: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>edit</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Edit Cafe Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeCafeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Desc}
                            onChange={this.onChangeCafeDesc}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Rating: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Rating}
                            onChange={this.onChangeCafeRating}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Edit Review"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;