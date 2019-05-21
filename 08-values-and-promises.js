function attachTitle(string) {
  return "DR. " + string;
}

var promise = new Promise((resolve, reject) => {
  resolve("MANHATTAN");
});

promise.then(attachTitle).then(console.log);
