console.log('hey buddy car was came to service center could u please verify the below steps')
function carCheckIn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Car check-in complete");
        }, 1000);
    });
 }
 
 function oilChange() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Oil changed");
        }, 2000);
    });
 }
 
 function engineCheck() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Engine check complete");
        }, 3000);
    });
 }
 
 function carWash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Car washed");
        }, 2000);
    });
 }
 
 function finalQualityCheck() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Final quality check complete");
        }, 2000);
    });
 }

 function customerFeedback() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("cutomer feedback received as excellent");
        }, 2000);
    });
 }
 
 carCheckIn()
   .then(res => { 
     console.log(res); 
     return oilChange(); 
   })
   .then(res => { 
     console.log(res); 
     return engineCheck(); 
   })
   .then(res => { 
     console.log(res); 
     return carWash(); 
   })
   .then(res => { 
     console.log(res); 
     return finalQualityCheck(); 
   })
   .then(res => { 
    console.log(res); 
    return customerFeedback(); 
  })
   .then(res => { 
     console.log(res); 
   })
   .catch(err => console.log(err));
 