const doubleNumber = (num) =>{
    return 2*num
}
const squareNumber = (num) =>{
    return num*num
}
const incrementNumber = (num) =>{
    return num+1
}

const performOperation = (num,operation) =>{
    return operation(num)    
}   

console.log(performOperation(4,doubleNumber))
console.log(performOperation(4,squareNumber))
console.log(performOperation(4,incrementNumber))