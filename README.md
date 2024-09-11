# task-board

## Description
This Task Board application allows a team to manage project tasks and track their progress. It provides an easy-to-use interface for adding, moving, and deleting tasks, as well as color-coding tasks based on deadlines to ensure tasks are completed on time. The application is powered by HTML, CSS, JavaScript, jQuery, and the Day.js library for handling dates. The task data is stored and retrieved from localStorage, ensuring the tasks persist across page refreshes. I modified starter code provided by UofMN Coding Bootcamp through Ed-X. 

## Key Features
Task Organization: Tasks are grouped into three progress categories: "Not Yet Started", "In Progress", and "Completed".
Drag and Drop: Users can drag tasks between columns to update their status.
Persistent Data: Tasks are stored in localStorage and remain on the task board even after refreshing the page.
Color-Coded Deadlines: Tasks are color-coded to show their urgency. If a task is nearing its deadline, it turns yellow, and if overdue, it turns red.
Task Modal: Users can create new tasks using a modal form where they specify the task title, description, and deadline date.
Task Deletion: Tasks can be deleted with a click of a button, removing them permanently from the task board.

## Technologies Used
HTML: Structure of the application.
CSS: Styling and layout.
JavaScript (ES6): Application logic.
jQuery: DOM manipulation and event handling.
Day.js: Handling and manipulating task deadlines.
localStorage: Persistent data storage across page refreshes.

## Usage
Upon opening the application, you will see columns representing tasks in different progress states: "Not Yet Started", "In Progress", and "Completed."
To create a new task, click on the "Add Task" button. A modal will appear where you can fill in the task title, description, and deadline.
Drag and drop tasks between columns to update their progress.
Tasks will automatically change color based on their proximity to the deadline (yellow for nearing, red for overdue).
To delete a task, click the "Delete" button, and the task will be permanently removed.

### Deployed site:
https://andreacannon.github.io/task-board/

![Webpage gif showing usage](assets/screenshot.gif)