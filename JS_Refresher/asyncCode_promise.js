//async - doesnot execute immediately
const fetchData = (callback) => {
  setTimeout(() => {
    callback("Done!");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

//synchronous function
console.log("Hello!");
console.log("Hi!");

//Using Promise
const fetchDataUsingPromise = () => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchDataUsingPromise().then((text)=>{
    console.log(text);
  })
}, 2000);

//synchronous function
console.log("Hello!");
console.log("Hi!");
