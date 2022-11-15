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
		listItem.prepend(createCompleteButton());
		toDoList.appendChild(listItem);
	}
}

/*
 * Create a button that resides with the task it was created with.
 */
function createCompleteButton() {
	const completeButton = document.createElement('button');
	completeButton.textContent = 'Complete';
	completeButton.className = 'complete_button';
	completeButton.addEventListener('click', function() {
		const listItem = completeButton.parentElement;
		listItem.remove();
	});
	return completeButton;
}

const addTaskButton = document.querySelector('#add_task_button');
addTaskButton.addEventListener('click', addTask);
