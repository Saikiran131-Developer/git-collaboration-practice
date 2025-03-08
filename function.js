console.log(
  "Hey kiran customer requested order could you please track the order"
);
console.log("offcourse i'll handle the order");
function orderReceived() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order was received");
    }, 1000);
  });
}

function prepareFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Food prepared");
    }, 3000);
  });
}

function packFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Food packed");
    }, 2000);
  });
}

function assignDeliveryPerson() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delivery person assigned");
    }, 2000);
  });
}

function deliverFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Food delivered");
    }, 4000);
  });
}

function trackedOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("tracked order scucessfully and my job is completed");
    }, 1000);
  });
}

orderReceived()
  .then((res) => {
    console.log(res);
    return prepareFood();
  })
  .then((res) => {
    console.log(res);
    return packFood();
  })
  .then((res) => {
    console.log(res);
    return assignDeliveryPerson();
  })
  .then((res) => {
    console.log(res);
    return deliverFood();
  })
  .then((res) => {
    console.log(res);
    return trackedOrder();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

  

