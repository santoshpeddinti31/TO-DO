"use strict";

// selectors for input and list

const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

//add the task in the list

function addTask() {
  if (taskInput.value >= " ") {
    const newText = taskInput.value;

    //create the list

    const newTask = document.createElement("li");
    newTask.classList.add("listed");
    newTask.innerHTML = `${newText} <button type="button" class='remove' onclick="removeTask(this)"><span class="material-symbols-outlined">
    delete
    </span></button>
    <button type="button" class='update' onclick="updateTask(this)"><span class="material-symbols-outlined">
    edit_square
    </span></button>`;
    taskList.appendChild(newTask);

    //create span

    const newDate = new Date().toLocaleString();
    const newSpan = document.createElement("span");
    newSpan.classList.add("date");
    newSpan.innerHTML = newDate;
    newTask.appendChild(newSpan);

    taskInput.value = "";
  } else {
    window.alert("plese give the input field my dear😆");
  }
}

//remove the task in the list

function removeTask(task) {
  task.parentElement.remove();
}

//update the task in the list

function updateTask(task) {
  const newtaskText = prompt("Enter the input field for update😃");
  task.parentElement.innerHTML = `${newtaskText} <button type="button" class='remove' onclick="removeTask(this)"><span class="material-symbols-outlined">
  delete
  </span></button>
  <button type="button" class='update' onclick="updateTask(this)"><span class="material-symbols-outlined">
  edit_square
  </span></button>`;
}

// Enter key for submit

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && taskInput.value >= "") {
    e.preventDefault();
    addTask();
  }
});
