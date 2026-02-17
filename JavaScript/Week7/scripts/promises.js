// How to write promises in JS

// Step1:
let p = new Promise(function (resolve, reject) {
  let a = 10 + 2; // immitating some processing...time taking process...
  //   we were acquiring data from an API multi TB of data..

  if (a === 12) {
    resolve("Promise Fulfilled");
  } else {
    reject("Promise rejected/ Failed");
  }
});

// How to call/execute/use a promise?
// if promise is resolved, then() part executes and if promise is rejected, catch() part will exeucte...

p.then(function (message) {
  console.log("Congrats!", message);
})
  .catch(function (error) {
    console.log("Alas!", error);
  })
  .finally(function () {
    console.log("I am finally");
  });
