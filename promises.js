console.log('Hey! How about a Promise?');

function myTurn() {
  console.log('It is my turn to run as a named function');
}

async function waitForIt(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForData() {
  return new Promise(resolve => resolve(`Tasty, tasty data`));
}

waitForData()
  .then(data => console.log(`Value of my thenned data: ${data}`));

(async function() {
  const myData = await waitForData();
  console.log(`Value of myData: ${myData}`)
})();

(function() {
  console.log('Run me right away');
})();

waitForIt(1000)
  .then(myTurn);
