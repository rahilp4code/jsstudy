// EVENT LOOP

console.log("Test Start"); //1
setTimeout(() => console.log("hi"), 0); //5
Promise.resolve("Resolved promise 1").then((res) => console.log(res)); //3
Promise.resolve("Resolved promise 2").then((res) => {
  for (i = 0; i < 1000000000; i++) {}
  console.log(res);
}); //4
console.log("Test End"); //2

// first synchrnous are executed, then asynchronous are loaded at the same time but event loop prioritise microtask queue first(promises) then callbacks queue(normal callbacks)
//even though the setimeout is compplete way before 'resolved promise 2' its still ignored until microtask queue is completed🥲
