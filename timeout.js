const start = Date.now();

function reportDelay() {
  const startCallback = Date.now();
  const delay = startCallback - start;
  console.log('Hello, I am the first async statement');
  console.log(`I ran after ${delay} milliseconds`);
}

setTimeout(reportDelay, 1000);

console.log('Hello! I am the first sync statement');
console.log('Hello! I am the second sync statement');

/*
// BROWSER CODE! For explanation only!
var button = document.querySelector('button');
button.addEventListener('click', doSomethingWithButton);

// Imagine a world without events and event loop:
while (true) {
  if (hearClick) break; // not gonna work
}
*/
