let statusTasks = "show";
function showHideTasks() {
    if (statusTasks === "show") {
        statusTasks = "hide";
        const div = document.getElementById("tasksH1").nextElementSibling;
        div.style.display = "none";
        const icon = document.getElementById("iconTasks");
        icon.classList = "";
        icon.classList.add("fa-solid", "fa-angle-left");
    } else {
        statusTasks = "show";
        const div = document.getElementById("taskItems");
        div.style.display = "flex";
        const icon = document.getElementById("iconTasks");
        icon.classList = "";
        icon.classList.add("fa-solid", "fa-angle-down");
    }
}
let statusTasksCompleted = "show";
function showHideTasksCompleted() {
    if (statusTasksCompleted === "show") {
        statusTasksCompleted = "hide";
        const div =
            document.getElementById("completedTasksH1").nextElementSibling;
        div.style.display = "none";
        const icon = document.getElementById("iconCompletedTasks");
        icon.classList = "";
        icon.classList.add("fa-solid", "fa-angle-left");
    } else {
        statusTasksCompleted = "show";
        const div = document.getElementById("taskCompletedItems");
        div.style.display = "flex";
        const icon = document.getElementById("iconCompletedTasks");
        icon.classList = "";
        icon.classList.add("fa-solid", "fa-angle-down");
    }
}


function addTask() {
    const taskName = document.getElementById("taskName");
    const startTime = document.getElementById("startTime");
    const endTime = document.getElementById("endTime");

    if (
        taskName.value === "" ||
        startTime.value === "" ||
        endTime.value === ""
    ) {
        window.alert("Please fill all inputs !");
    } else {
        const newTask = document.createElement("div");
        newTask.classList.add("taskItem");

        const taskTitle = document.createElement("div");
        const p = document.createElement("p");
        p.textContent = taskName.value;
        taskTitle.appendChild(p);

        const taskTime = document.createElement("div");
        const span = document.createElement("span");
        span.textContent = startTime.value + " - " + endTime.value;
        taskTime.appendChild(span);

        const taskIcons = document.createElement("div");
        taskIcons.classList.add("iconDiv");
        const iTick = document.createElement("i");
        const iCross = document.createElement("i");
        iTick.classList.add("fa-solid", "fa-check", "iconTask", "tickIcon");
        iCross.classList.add("fa-solid", "fa-xmark", "iconTask", "crossIcon");
        iTick.onclick = () => completed(iTick);
        iCross.onclick = () => removeTask(iCross);
        taskIcons.appendChild(iTick);
        taskIcons.appendChild(iCross);

        newTask.appendChild(taskTitle);
        newTask.appendChild(taskTime);
        newTask.appendChild(taskIcons);

        document.getElementById("taskItems").appendChild(newTask);

        taskName.value = "";
        startTime.value = "";
        endTime.value = "";
    }
}

function completed(element) {
    let taskItem = element.closest(".taskItem");
    const completedItems = document.getElementById("taskCompletedItems");
    element.parentElement.remove();
    taskItem.classList.add("completed");
    completedItems.appendChild(taskItem);
}

function removeTask(element) {
    let taskItem = element.closest(".taskItem");
    taskItem.remove();
}

function completeAll() {
    const tasks = document.getElementById("taskItems").children;
    const iconDiv = document.querySelectorAll(".iconDiv");
    iconDiv.forEach((element) => {
        element.remove();
    });
    Array.from(tasks).forEach((element) => {
        element.classList.add("completed");
        document.getElementById("taskCompletedItems").appendChild(element);
    });
}

function clearAll() {
    document.getElementById("taskItems").innerHTML = "";
    document.getElementById("taskCompletedItems").innerHTML = "";
}
