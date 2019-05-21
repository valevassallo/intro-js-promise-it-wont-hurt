const firstPromise = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

const promise = firstPromise(300);
promise.then(() => console.log("TIMED OUT!"));

/* 'use strict';
    
    // Set a timeout of 300ms
    
    setTimeout(function () {
      // After 300ms has elapsed, print out 'TIMED OUT!'
    
      console.log('TIMED OUT!');
    }, 300);
*/
