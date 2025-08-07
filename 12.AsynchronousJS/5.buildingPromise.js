const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("LOTTERY DRAWS ARE STARTING SOON..");
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("YOU WON THE LOTTERY🤑");
    } else {
      reject(new Error("YOU LOST YOUR MONEY🤣👎"));
    }
  }, 3000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// ⭐Promisifying setTimeout

const wait = (sec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000);
  });
};

wait(3)
  .then(() => {
    console.log("wait 3 seconds");
    return wait(2);
  })
  .then(() => {
    console.log("wait 2 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("wait 1 seconds");
    return wait(1);
  })
  .then((res) => {
    console.log("YOU FOOL😏");
  });

// some more promise static methods
Promise.resolve("Resolved").then((res) => console.log(res));
Promise.reject(new Error("REJECTED")).then((res) => console.error(res));
