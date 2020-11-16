const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        var uncompletedTask;
      return  uncompletedTask= this.tasks.filter((trueObj)=>{
            return trueObj.completed==false
        })
    }
}

console.log(tasks.getTasksToDo())