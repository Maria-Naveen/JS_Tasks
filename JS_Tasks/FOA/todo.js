const tasks = [{'id':1,'description':'Shopping','dueDate':'20-05-2024','status':'Not finished'},
{'id':15,'description':'Checkup','dueDate':'01-05-2024','status':'Finished'},
{'id':8,'description':'Meeting','dueDate':'06-05-2024','status':'Not finished'}
]

class Task{
    constructor(id,description,dueDate,status){
        this.id = id;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }
}

const reading = new Task(4,'Book Reading','06-05-2024','Not finished')

const addTask =(tasks,task)=>{
    tasks.push(task)
}

const updateTask =(tasks,taskId)=>{
    tasks.forEach((task)=>{
        if(task.id === taskId){
            task.status = 'Working on it'
        }
    })
}

const removeTask =(tasks,taskId)=>{
    tasks.forEach((task)=>{
        if(task.id === taskId){
            tasks.splice(tasks.indexOf(taskId),1)
        }
    })
}

const displayTasks=(tasks)=>{
    tasks.forEach((task)=>{
        console.log(`${task.description}-${task.dueDate}(${task.status})`)
    })
}

addTask(tasks,reading)
updateTask(tasks,4)
removeTask(tasks,4)
displayTasks(tasks)


// console.log(tasks)