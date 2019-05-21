first()
  .then(response => second(response))
  .then(console.log);
