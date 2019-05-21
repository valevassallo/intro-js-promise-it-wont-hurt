var promise = Promise.resolve("It worked!!");

promise.then(console.log).catch(err => {
  console.error("There's an error!");
});
