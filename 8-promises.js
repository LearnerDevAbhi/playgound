const doWorkPromise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("opps there is a error")
       // resolve([2,2,3]);
       reject("opps there is no error")

    }, 2000);
})
doWorkPromise.then((result)=>{
console.log(result)
}).catch((error)=>{
console.log(error)
})