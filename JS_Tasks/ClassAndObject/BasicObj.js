const student = {}
student['name']='Maria Naveen'
student['email']='marianaveen15@gmail.com'
student['age']=20
console.log(student.name)
console.log(student.age)
student['age'] = 10
console.log(student.age)
student.greet = function(){
    return 'Hello,'+this.name
}
console.log(student.greet())