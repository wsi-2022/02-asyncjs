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
