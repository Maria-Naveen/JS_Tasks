const inventory = [{'id':1,'name':'hammer','price':250,'quantity':1},
                    {'id':2,'name':'spanner','price':150,'quantity':2}]
class Product{
    constructor(id,name,price,quantity){
        this.id = id
        this.name = name
        this.price = price
        this.quantity = quantity
    }
}

const addProduct = (shop,item) =>{
    shop.push(item)
}

const chisel = new Product(3,'chisel',400,1)
addProduct(inventory,chisel)

console.log(inventory)

const updateProduct = (shop,itemId) =>{
    shop.filter((item)=>{
        return item.id === itemId
    }).forEach((item)=>{
        item.quantity += 1;
    })
}

// updateProduct(inventory,1)

// console.log(inventory)

const removeProduct = (shop,itemId) =>{
    shop.filter((item)=>{
        return item.id === itemId
    }).forEach((item)=>{
        shop.splice(shop.indexOf(item),1)
    })
}
// removeProduct(inventory,1)
// console.log(inventory)

const displayProducts = (shop) =>{
    shop.forEach((prod)=>{
        console.log(`${prod.name}:${prod.price}(${prod.quantity})`)
    })
}
displayProducts(inventory)
