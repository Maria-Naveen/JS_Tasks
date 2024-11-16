const cart = [{'name':'Rice','price':45,'quantity':1},
              {'name':'Wheat','price':50,'quantity':2},
              {'name':'Toothpaste','price':65,'quantity':5}]
const calculateTotalPrice = (cart) =>{
    let total = 0
    cart.forEach((item)=>{
        total+=item.price
    })
    return total
}

console.log(calculateTotalPrice(cart))