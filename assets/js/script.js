// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    nextId = nextId+1;
    return nextId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const newCard = 
    $('<div>')
        .attr('data-task-id', task.id)
        .draggable({
            revert: true,
            cursor: "grab",
            zIndex: 100
        })
        .addClass('draggable m-3 border')
        .attr('id', `${task.id}`)
        .append($('<h5>')
            .addClass('border-bottom p-2 bg-light')
            .text(task.title)
            .css('background-color', 'light-gray'))
        .append($('<p>')
            .addClass('pt-2')
            .text(task.description))
        .append($('<p>')
            .addClass('')
            .text(task.date))
        .append($('<button>')
            .addClass('bg-danger border-1 border-white text-white rounded mb-3')
            .css('background-color', 'red')
            .text('Delete')
            .attr('data-task-id', task.id)
            .on("click", handleDeleteTask)
        );

    console.log(newCard)
    return newCard
};

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    $("#todo-cards").html(""); //Clears
    $("#done-cards").html("");
    $("#in-progress-cards").html("");

    console.log(taskList); //Renders
    taskList.forEach(task => {
        if(task.id){ //creates card
            const card = createTaskCard(task);

            if (task.status !== 'done'){ //colors card based on due date
                if (dayjs().format('MM/DD/YYYY') == task.date){
                    $(`#${task.id}`).css('background-color', 'yellow')
                    card.addClass('bg-warning');
                } else if (dayjs().isAfter(dayjs(task.date, 'day'))){
                    card.addClass('bg-danger');
                } else {
                    card.addClass('bg-white');
                }
            } else {
                card.addClass('bg-white');
            }
            $(`#${task.status}-cards`).append(card); //append card
        };
    });
};

// Todo: create a function to handle adding a new task
function handleAddTask(title, date, description){
    const titleInput = title.val();  //gets user input
    const dateInput = date.val();
    const descriptionInput = description.val();

    title.val('');  //clears the form's fields
    date.val('');
    description.val('');

    const nextId = generateTaskId();

    task = {
        title: titleInput,
        date: dateInput,
        description: descriptionInput,
        id: nextId,
        status: 'todo'
    };
    
    taskList.push(task) ;
    localStorage.setItem("tasks", JSON.stringify(taskList));
    localStorage.setItem("nextId", JSON.stringify(nextId));
    return task;
};

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    taskId = event.target.dataset.taskId;
    for (let task of taskList) {
      if (task.id === parseInt(taskId)) {
        taskList = taskList.filter(function(tasks){
            return tasks !== task;
        });
      };
    };
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTaskList(); 
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = ui.draggable[0].dataset.taskId;
    const newStatus = event.target.id;
    for (let task of taskList) {
      if (task.id === parseInt(taskId)) {
        task.status = newStatus;
      }
    }

    console.log(taskList)
    localStorage.setItem('tasks', JSON.stringify(taskList)); // save and render
    renderTaskList();   

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    
    if (taskList){  //checks storage for previous tasks
        renderTaskList();
    } else {
        taskList = [];
        nextId = 0;
    }

    const title = $('#title-input');  //Listen for user inputs
    const date = $('#datepicker');
    const description = $('#description-input');
    
    $('#todo').droppable({  //Make lanes droppable
            drop: handleDrop
        }).addClass('droppable');
    $('#in-progress').droppable({
        drop: handleDrop
        }).addClass('droppable');
    $('#done').droppable({
            drop: handleDrop
        }).addClass('droppable');
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
    });
    
    $('#add-task-btn');  //Listens for modal add-task button-click event
    $('#add-task-btn').on('click', function(){
            task = handleAddTask(title, date, description)
            renderTaskList(task)
        }
    );

});
