const persons = ["james","ram","ramesh","monica"]
const capitalized = persons.map((person)=>{
    return person[0].toUpperCase()+person.slice(1)
})

console.log(capitalized)

const details = [
    {'Name':'Naveen','City':'Coimbatore'},
    {'Name':'Babu','City':'Coimbatore'},
    {'Name':'Priya','City':'Salem'}
]

const filtered = details.filter((person)=>{
    return person.City === 'Coimbatore'
})

console.log(filtered)