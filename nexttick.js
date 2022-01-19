function sayHello(who) {
  return function() {
    console.log(`Hello from ${who}!`);
  }
}
setTimeout(sayHello('setTimeout'), 0);
console.log(`Hello from nothing but source order!`);
process.nextTick(sayHello('nextTick'));
