function parsedPromised(json) {
  return new Promise((resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (error) {
      reject(error.message);
    }
  });
}

parsedPromised(process.argv[2])
  .then(console.log)
  .catch(console.log);
