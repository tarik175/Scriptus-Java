var numbers=[3,56,2,48,5]

function double(x){
    return x*2
}
const newNumbers1=numbers.map(double)
console.log(newNumbers1)


//same result without map
const newNumbers4=[];

numbers.forEach(element => {
    x=> newNumbers4.push(x*3)
});


for (let i = 0; i <= 5; i++) {
    console.log(i)
    
}

const todos=[
    {
        id:1,
        task:"eat",
        isComplete:true
    },
    {
        id:2,
        task:"shopping",
        isComplete:true
    },
    {
        id:3,
        task:"take out dog",
        isComplete:false
    }
]

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].task)
    
}

const map1=todos.map(
    function tasks(eachTask){
        return eachTask.task
    }
)
//same thing with arrow
const map2=todos.map(
    eachItem=> eachItem.task
)


//same thing again but with for each
const taskArray=[]
todos.forEach(
    eachItem=> taskArray.push(eachItem.task)

)
console.log(taskArray)