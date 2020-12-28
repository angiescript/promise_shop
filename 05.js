const promise = new Promise((resolve, reject) => {
    resolve("PROMISE VALUE");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("PROMISE VALUE 2")
})

promise2.then(console.log, null);

console.log("MAIN PROGRAM");

promise.then(console.log, null);