function all(promise1, promise2) {
  var result = [];
  return new Promise((resolve, reject) => {
    return promise1.then(response => {
      result.push(response);
      return promise2.then(response => {
        result.push(response);
        resolve(result);
      });
    });
  });
}

all(getPromise1(), getPromise2()).then(response => {
  console.log(response);
});

/* suggested answer

function all(a, b) {
      return new Promise(function (fulfill, reject) {
        var counter = 0;
        var out = [];
    
        a.then(function (val) {
          out[0] = val;
          counter++;
    
          if (counter >= 2) {
            fulfill(out);
          }
        });
    
        b.then(function (val) {
          out[1] = val;
          counter++;
    
          if (counter >= 2) {
            fulfill(out);
          }
        });
      });
    }
    
    all(getPromise1(), getPromise2())
      .then(console.log);
 */
