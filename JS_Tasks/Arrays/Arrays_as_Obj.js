const colors = ['red','green','blue']
console.log(typeof(colors))
console.log(colors.length)
colors.push('orange')
console.log(colors)
colors.pop()
console.log(colors)
console.log(colors.indexOf('blue'))
colors.owner = 'Maria Naveen'
console.log(colors)
for(let color in colors){
    console.log(`${color}:${colors[color]}`)
}