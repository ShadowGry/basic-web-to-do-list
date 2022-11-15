/*
 * Prompt user for the name of a task and add it to the list. If the user cancels or submits an empty task, it does
 * nothing.
 */
function addTask() {
	const task = prompt('Enter a task to do');
	
	// Do not do anything if task is blank or cancelled.
	if(task !== null && task.trim() !== '') {
		const listItem = document.createElement('li');
		listItem.textContent = task;
		const toDoList = document.querySelector('#to_do_list');
		toDoList.appendChild(listItem);
	}
}

const addTaskButton = document.querySelector('#add_task_button');
addTaskButton.addEventListener('click', addTask);
