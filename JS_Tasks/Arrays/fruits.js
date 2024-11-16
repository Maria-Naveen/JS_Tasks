const fruits = ["apple","banana","cherry","date"]

fruits.forEach((fruit)=>{
    console.log(fruit[0].toUpperCase()+fruit.slice(1))
})

const reversedFruits = fruits.map((fruit)=>{
    return fruit.split("").reverse().join("")
})

console.log(reversedFruits)

const longFruits = fruits.filter((fruit)=>{
    return fruit.length>5
})

console.log(longFruits)

const aFruitsUpper = fruits.filter((fruit)=>{
    return fruit.includes('a')
}).map((fruit)=>{
    return fruit.toUpperCase()
})

console.log(aFruitsUpper)

let totalCharacters = 0
fruits.forEach((fruit)=>{
    totalCharacters+=fruit.length
})

console.log(totalCharacters)