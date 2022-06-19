import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {comments.map((item) => {
                            return (
                                <li key={item.id}>
                                    <p>{item.comment}</p>
                                    <p>{`-- ${item.author} , ${item.date}`}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            );
        } else {
            return (<div></div>);
        }
        
        
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle tag="h5">{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div> 
                    <div className="col-12 col-md-5 m-1">
                        { this.renderComments(dish.comments) }
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    render() {
        return (
            this.renderDish(this.props.dish)
        );
        
    }
}

export default DishDetail;