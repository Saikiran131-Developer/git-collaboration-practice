console.log("customer course enrollement");
function checkCourseAvailability() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Course is available");
    }, 1000);
  });
}

function processPayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment had processed");
    }, 3000);
  });
}

function generateEnrollmentID() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Enrollment ID was generated");
    }, 1000);
  });
}

function sendCourseMaterials() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Course materials sent to customer");
    }, 2000);
  });
}

function grantAccessToClasses() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Access to live classes was granted");
    }, 2000);
  });
}

checkCourseAvailability()
  .then((res) => {
    console.log(res);
    return processPayment();
  })
  .then((res) => {
    console.log(res);
    return generateEnrollmentID();
  })
  .then((res) => {
    console.log(res);
    return sendCourseMaterials();
  })
  .then((res) => {
    console.log(res);
    return grantAccessToClasses();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
