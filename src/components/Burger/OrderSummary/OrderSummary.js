import React, { Component } from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey + 1}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        });

        return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Continue to Checkout? Your order total was: ${this.props.totalPrice.toFixed(2)} </p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </>
        );
        }

};

export default OrderSummary;