const start = Date.now();

setTimeout(function() {
  const startCallback = Date.now();
  const delay = startCallback - start;
  console.log('Hello, I am the first async statement');
  console.log(`I ran after ${delay} milliseconds`);
}, 1000);

console.log('Hello! I am the first sync statement');
console.log('Hello! I am the second sync statement');
