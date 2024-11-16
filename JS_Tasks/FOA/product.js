const products = [{'id':1,'name':'milk','price':40,'category':'dairy'},
                    {'id':2,'name':'carrot','price':30,'category':'vegetable'},
                    {'id':3,'name':'pen','price':25,'category':'stationery'},
                    {'id':4,'name':'biryani','price':150,'category':'Food'},
                    {'id':5,'name':'idli','price':20,'category':'Food'},
                    {'id':10,'name':'coffee','price':8,'category':'Drink'},
                    {'id':12,'name':'candy','price':5,'category':'Snack'}
]

products.forEach((prod)=>{
    console.log(`${prod.name}-${prod.price}`)
})

const productsWithTax = products.map((prod)=>{
    return {'name':prod.name,'price':prod.price+prod.price*(10/100)}
})

console.log(productsWithTax)

const foodProducts = products.filter((prod)=>{
    return prod.category === 'Food'
})

console.log(foodProducts)

const affordableProducts = products.filter((prod)=>{return prod.price<10}).map((prod)=>{return `${prod.name}-$${prod.price}`})
console.log(affordableProducts)

let totalPrice = 0
products.forEach((prod)=>{
    totalPrice+=prod.price
})
console.log(totalPrice)