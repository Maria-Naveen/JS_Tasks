const expenses = [{'id':1,'name':'grocery','amount':500,'date':'15-03-2024'},
                    {'id':2,'name':'medicine','amount':650,'date':'24-04-2024'},
                    {'id':3,'name':'entertainment','amount':200,'date':'29-04-2024'}]

class Expense{
    constructor(id,name,amount,date){
        this.id = id
        this.name = name
        this.amount = amount
        this.date = date
    }
}

const grocery = new Expense(1,'grocery',500,'15-03-2024')
const medicine = new Expense(2,'medicine',650,'24-04-2024')
const entertainment = new Expense(3,'entertainment',200,'29-04-2024')

const dinner = new Expense(4,'dinner',400,'21-04-2024')

const addExpense =(expenses,expense)=>{
    expenses.push(expense)
}

addExpense(expenses,dinner)
// console.log(expenses)

const updateExpense =(expenses,expId)=>{
    expenses.forEach((expense)=>{
        if(expense.id === expId){
            expense.amount+=50
        }
    })
}

updateExpense(expenses,2)
// console.log(expenses)

const removeExpense = (expenses,expId)=>{
    expenses.forEach((expense)=>{
        if(expense.id === expId){
            expenses.splice(expenses.indexOf(expense),1)
        }
    })
}

//removeExpense(expenses,4)
// console.log(expenses)

const displayExpenses =(expenses)=>{
    expenses.forEach((expense)=>{
        console.log(`${expense.name}-${expense.amount}(${expense.date})`)
    })
}
displayExpenses(expenses)