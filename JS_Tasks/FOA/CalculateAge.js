const people = [{'Name':'Varun','Age':20},{'Name':'Samson','Age':21},{'Name':'Yazhini','Age':22}]

let totAge = 0
const calculateAverageAge=(people)=>{
    people.forEach((person)=>{
        totAge+=person.Age
    })
    const avgAge = totAge/people.length
    return avgAge
}

console.log(calculateAverageAge(people))