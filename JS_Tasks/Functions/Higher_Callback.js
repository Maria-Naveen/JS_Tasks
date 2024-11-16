//Part-A
// function higherOrderFunction(num,callback){
//     callback(num)
// }

// function callbackFunction(num){
//     console.log(num)
// }

// higherOrderFunction(4,callbackFunction);

//Part-B
// const higherOrderFunction = function(num,callback){
//     callback(num)
// }

// const callbackFunction = function(num){
//     console.log(num**2)
// }

// higherOrderFunction(5,callbackFunction)

//Part-C

const higherOrderFunction = (num1,num2,callback) =>{
    callback(num1,num2)
}

const callbackFunction = (num1,num2) =>{
    console.log(num1+num2)
}

higherOrderFunction(2,90,callbackFunction)