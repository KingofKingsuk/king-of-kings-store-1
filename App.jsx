// Add this function to your App component (replace the existing proceedToCheckout)

const proceedToCheckout = () => {
  const totalPounds = getCartTotalPounds();
  
  if (totalPounds === 0) {
    alert('Your cart is empty. Please add items before checking out.');
    return;
  }

  // Your Stripe payment link
  const stripeLink = 'https://buy.stripe.com/aFaaEY5Stb7MdqubLrdUY01';
  
  // Calculate amount in pence
  const amountInPence = Math.round(totalPounds * 100);
  
  // Create order summary
  const itemNames = cart.map(item => item.nameWithSize || item.name).join(', ');
  
  // Create a summary message
  const summary = `${cart.length} item(s) - Total: £${totalPounds.toFixed(2)}`;
  
  // Ask customer to enter amount manually on Stripe page
  alert(`Your total is £${totalPounds.toFixed(2)}. You'll be redirected to Stripe to complete payment.`);
  
  // Redirect to Stripe
  window.open(stripeLink, '_blank');
};
