const promise = new Promise((resolve, reject) => {
    reject(new Error("I DID NOT FIRE!"));
    resolve("I FIRED!");
});

function onReject(error){
    console.log(error.message);
};

promise.then(console.log, onReject);
