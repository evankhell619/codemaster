const tasks = []

const addTask = (task) => {
  tasks.push({
    task: task,
    completed: false,
  })
}

const removeTask = (index) => {
  tasks.splice(index - 1,1)
}

const completedTask = (index) => {
  tasks[index - 1].completed = true
}

const taskList = () => {
  tasks.forEach((task, index) => {
    console.log(`${index + 1}.`, task.completed ? "✅" : "⬛", task.task)
  })
}


const prompt = () => {
  displayTask()
  console.log("To do list")
  console.log("1. Add Task");
  console.log("2. Delete Task");
  console.log("3. Mark as Complete");
  console.log("4. Quit");

  rl.question("> ",(answer) => {
    switch (answer) {
      case "1":
        rl.question("What u wanna do?", (answer) => {
          addTask(answer)
          prompt()
        })
        break;

      case "2": 
      rl.question("Which task to remove?", (answer) => {
        addTask(answer)
        prompt()
      })
      break;

      case "3": 
      rl.question("Which task to mark complete?", (answer) => {
        addTask(answer)
        prompt()
      })
      break;

      case "": 
      rl.question("Wrong command", (answer) => {
        addTask(answer)
        prompt()
      })
      break;
      
    }
  } )
  
}