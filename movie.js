console.log('customer movie ticket booking tracking order')
function selectSeats() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Seats are selected");
        }, 2000);
    });
 }
 
 function processPayment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment processed");
        }, 3000);
    });
 }
 
 function generateTicket() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ticket generated");
        }, 1000);
    });
 }
 
 function sendConfirmationEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Confirmation email sent");
        }, 2000);
    });
 }
 
 selectSeats()
   .then(res => { 
     console.log(res); 
     return processPayment(); 
   })
   .then(res => { 
     console.log(res); 
     return generateTicket(); 
   })
   .then(res => { 
     console.log(res); 
     return sendConfirmationEmail(); 
   })
   .then(res => { 
     console.log(res); 
   })
   .catch(err => console.err(err));
 