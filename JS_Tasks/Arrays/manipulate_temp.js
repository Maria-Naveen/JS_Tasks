const temperatures = [-3,14,22,5,-10]

temperatures.forEach((temperature)=>{
    //console.log(temperature)
    console.log((temperature*9/5)+32)
})

const temperaturesInFahrenheit = temperatures.map((temp)=>{
    return (temp*9/5)+32
})

console.log(temperaturesInFahrenheit)

const belowFreezing = temperatures.filter((temp)=>{
    return temp<0
})

console.log(belowFreezing)