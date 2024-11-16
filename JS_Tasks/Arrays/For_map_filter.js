const numbers = [1,2,3,4,5]
numbers.forEach((a)=>{
    //console.log(a)
    console.log(a*2)
})

const squaredNumbers = numbers.map((num)=>{
    return num*num
})

console.log(squaredNumbers)

const evenNumbers = numbers.filter((num)=>{
    return num%2===0
})

console.log(evenNumbers)