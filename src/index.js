document.addEventListener("DOMContentLoaded", () => {
  const newTaskFromForm = document.getElementById("create-task-form");
  const newDescriptionArea = document.getElementById("new-task-description");
  
  const newTodoElement = document.getElementById("tasks");
  
  // Form event listener 
  newTaskFromForm.addEventListener("submit", createANewTask);
});

const createNewTask = event => {
  event.preventDefault();
  
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  
  newTask.innerText = newTaskDescription.value;

  addTask(newTask);
  event.target.reset();
};

function addTask() {
  
}
