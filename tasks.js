const tasksTableBodyElement = document.getElementById('tasks-table-body')
const tasktitleInputElement = document.getElementById('task-title-input')
const tasksAddButtonElement = document.getElementById('task-add-button')

const loadTasks = async () => {
  const response = await fetch('http://localhost:8080/api/tasks')
  const responseBody = await response.json()

  const tasks = responseBody.tasks

  while (tasksTableBodyElement.firstChild) {
    tasksTableBodyElement.removeChild(tasksTableBodyElement.firstChild)
  }

  tasks.forEach((tasks) => {
    const titleTdElement = document.createElement('td')
    titleTdElement.innerText = tasks.title

    const createdAtTdElement = document.createElement('td')
    createdAtTdElement.innerText = tasks.createAt

    const trElement = document.createElement('tr')
    trElement.appendChild(titleTdElement)
    trElement.appendChild(createdAtTdElement)

    tasksTableBodyElement.appendChild(trElement)
  });
}

const registerTask = async() => {
  const title = tasktitleInputElement.value

  const requestBody = {
    title: title,
  }

  await fetch('http://localhost:8080/api/tasks', {
    method: 'POST',
    body: JSON.stringify(requestBody)
  })

  await loadTasks()
}

const main = async () => {
  tasktitleInputElement.addEventListener('input', (event) => {
    const inputValue = event.target.value
    const isInvalidInput = inputValue.length < 1 || 30 < inputValue.length
    tasksAddButtonElement.disabled = isInvalidInput
  })

  tasksAddButtonElement.addEventListener('click', registerTask)
  await loadTasks()
}

main()
