console.log('customer laptop issue')
function diagnoseIssue() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Issue diagnosed");
        }, 3000);
    });
 }
 
 function replaceFaultyParts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Faulty parts replaced");
        }, 4000);
    });
 }
 
 function updateSoftware() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Software updated");
        }, 2000);
    });
 }
 
 function finalTesting() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Final testing complete");
        }, 2000);
    });
 }
 
 function returnToCustomer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Laptop returned to customer");
        }, 1000);
    });
 }
 
 diagnoseIssue()
   .then(res => { 
     console.log(res); 
     return replaceFaultyParts(); 
   })
   .then(res => { 
     console.log(res); 
     return updateSoftware(); 
   })
   .then(res => { 
     console.log(res); 
     return finalTesting(); 
   })
   .then(res => { 
     console.log(res); 
     return returnToCustomer(); 
   })
   .then(res => { 
     console.log(res); 
   })
   .catch(err => console.log(err));
 