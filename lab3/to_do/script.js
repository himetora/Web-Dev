document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed");
        });

        const span = document.createElement("span");
        span.textContent = taskText;

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "🗑";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }
});
