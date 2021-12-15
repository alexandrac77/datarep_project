import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// some comments
class CafeItem extends Component {
    constructor(){
        super();
        this.DeleteCafe = this.DeleteCafe.bind(this);
    }

    DeleteCafe(){
        console.log('Delete: '+this.props.cafe._id);

        axios.delete('http://localhost:4000/api/cafes/'+this.props.cafe._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch();

    }

    render() {
        return (
            <div>
                {/* some comments  */}
                <Card>
                    <Card.Header>{this.props.cafe.Name}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <p>{this.props.cafe.Desc}</p>
                            <footer>
                                {this.props.cafe.Rating}
                            </footer>
                        </blockquote>
                    </Card.Body>
<Link to={"/edit/" +this.props.cafe._id} className="btn btn-primary">Edit</Link>
<Button variant="danger" onClick={this.DeleteCafe}>Delete</Button>
                </Card>
            </div>
        );
    }
}
export default CafeItem;