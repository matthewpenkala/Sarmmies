// Get public token from query string
const publicToken = new URLSearchParams(window.location.search).get('publicToken');

// Fetch payment session from API
const response = await fetch(`https://payment.snipcart.com/api/public/custom-payment-gateway/payment-session?publicToken=${publicToken}`);

// Retrieve body as JSON if the request's status code is successful
if (response.ok) {
    const paymentSession = await response.json()
    setTimeout(() => {
        console.log(paymentSession);
    }, 9999);
}
