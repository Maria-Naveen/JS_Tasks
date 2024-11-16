// const friend = {'name':'Bala',
//                 'email':'bala@gmail.com',
//                 'age':20,
//                 'address':{
//                     'country':'India',
//                     'city':'Krishnagiri',
//                     'pin_code':635001
//                 }}
// console.log(friend)
// const topper = {
//                 'name':'Pradeesh',
//                 'email':'pradeesh@gmail.com',
//                 'age':20,
//                 'address':{
//                     'country':'India',
//                     'city':'Pondicherry',
//                     'pin_code':632456
//                 }}
// console.log(topper)
class Student{
    constructor(name,email,age,country,city,pin_code){
        this.name = name
        this.email = email
        this.age = age
        this.country = country
        this.city = city
        this.pin_code = pin_code
    }
    greet(){
        return `Hello,${this.name}`
    }
    getFullAddress(){
        return `${this.country},${this.city} - ${this.pin_code}`
    }
}
const myself = new Student('Naveen','maria@gmail.com',20,'India','Krishnagiri',635001)
const myFriend = new Student('Bala','bala@gmail.com',20,'India','Krishnagiri',635002)
const myColleague = new Student('Prasanth','prasa@gmail.com',20,'India','Dharmapuri',636808)

// console.log(myself,myFriend,myColleague)
console.log(myself.getFullAddress())
