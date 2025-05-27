function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // ✅ Create checkbox icon
  const checkIcon = document.createElement("span");
  checkIcon.innerHTML = "✔️";
  checkIcon.classList.add("check-icon");
  checkIcon.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const span = document.createElement("span");
  span.textContent = taskText;
  span.classList.add("task-text");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(checkIcon);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
