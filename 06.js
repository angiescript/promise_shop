//Ett snabbare sätt att skriva ser ut så här:

const promise = Promise.resolve("RESOLVED!");
promise.then(console.log);

const promise2 = Promise.reject(new Error("ERROR!"));

function onReject(error){
    console.error(error.message);
    //eller console.log(error.message)
};

promise2.catch(onReject);
//Ovan är alltså istället för promise2.then(null, onReject)