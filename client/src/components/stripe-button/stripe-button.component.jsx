import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_yNrVohacwEKA9HWRJA8cWwUZ00AqoA8WgM";

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('Succesful payment!');
      })
      .catch(err => {
        console.log('Payment error: ', err);
        alert('There was an issue with your payment. Please use the suggested credit card below!');
      })
  };

  return (
    <StripeCheckout 
      label="💳 Pay now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={ `Your total is $${ price }` }
      amount={ priceForStripe }
      panelLabel="Pay now"
      token={ onToken }
      stripeKey={ publishableKey }
    />
  );
};

export default StripeCheckoutButton;
