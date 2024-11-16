// function greet(name='Guest'){
//     console.log(`Hello,${name}`)
// }
// greet('Naveen')
// greet()

const greetFunction = (name='Guest') =>{
    return `Hello,${name}!`
}

console.log(greetFunction())
console.log(greetFunction('Naveen'))