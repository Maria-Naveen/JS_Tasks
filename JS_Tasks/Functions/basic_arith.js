const addNumbers = (a,b) =>{
    return a+b
}
const multiplyNumbers = (a,b) =>{
    return a*b
}
const subtractNumbers = (a,b) =>{
    return a-b
}
const divideNumbers = (a,b) =>{
    if(b===0){
        return 'Division by zero is invalid!'
    }
    else{
        return a/b
    }
}
const performArithmetic = (num1,num2,operation) =>{
    return operation(num1,num2)
}

console.log(performArithmetic(8,4,addNumbers))
console.log(performArithmetic(5,-8,multiplyNumbers))
console.log(performArithmetic(9,6,divideNumbers))
