//your JS code here. If required.
const promises = [];

for (let i = 1; i <= 5; i++) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (Math.random() < 0.5) {
        resolve(randomNumber);
      } else {
        reject(`Error in Promise ${i}`);
      }
    }, 1000);
  });
  promises.push(promise);
}

Promise.all(promises)
  .then((results) => {
    results.forEach((result, index) => {
      const pTag = document.createElement('p');
      pTag.textContent = `Promise ${index + 1} resolved with ${result}`;
      document.getElementById('output').appendChild(pTag);
    });
  })
  .catch((errors) => {
    errors.forEach((error, index) => {
      const pTag = document.createElement('p');
      pTag.textContent = `Promise ${index + 1} rejected with ${error}`;
      document.getElementById('output').appendChild(pTag);
    });
  });
