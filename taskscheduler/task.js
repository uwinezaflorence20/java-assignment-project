//Task object constructor
function Task(title, description, dueDate, isCompleted = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = isCompleted;
  }
  
  // Add tasks with due dates to the scheduler
  function addTask(title, description, dueDate) {
    const newTask = new Task(title, description, dueDate);
    tasks.push(newTask);
  }
  
  // Display tasks sorted by their due dates
  function displayTasks() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    tasks.forEach((task) => {
      const status = task.isCompleted ? "[completed]" : "[in progress]";
      console.log(`Title: ${task.title}, Due Date: ${task.dueDate}, Status: ${status}`);
    });
  }
  
  // Update task details or mark tasks as completed
  function updateTask(index, title, description, dueDate, isCompleted) {
    if (index >= 0 && index < tasks.length) {
      const task = tasks[index];
      task.title = title || task.title;
      task.description = description || task.description;
      task.dueDate = dueDate || task.dueDate;
      task.isCompleted = isCompleted || task.isCompleted;
    }
  }
  
  // Remove tasks from the scheduler
  function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
    }
  }
  
  // Initialize tasks array
  const tasks = [];
  
  // Usage examples
  addTask("assignment", "alx, shecancode, and UR work", "2023-02-15");
  addTask("Finish project report", "Prepare the final draft", "2023-02-20");
  displayTasks();
  updateTask(0, "Buy shoe", "converse, vans, jordan, and tatum", "2023-02-15", true);
  displayTasks();
  removeTask(1);
  displayTasks();