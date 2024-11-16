const forEachArray = (arr,cb)=>{
    for(let i=0;i<arr.length;i++){
        cb(arr[i],i,arr)
    }
}

const myArray = [1,2,3,4,5]
forEachArray(myArray,(num)=>{
    console.log(num*2)
})

const mapArray = (arr,cb) =>{
    const res = []
    for(let i=0;i<arr.length;i++){
        res.push(cb(arr[i],i,arr))
    }
    return res
}
const result = mapArray(myArray,(num)=>{return num*3})
console.log(result)

const filterArray = (arr,cb) =>{
    const res = []
    for(let i=0;i<arr.length;i++){
        if(cb(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}

const filteredResult = filterArray(myArray,(num)=>{
    return num%2==0
})

console.log(filteredResult)