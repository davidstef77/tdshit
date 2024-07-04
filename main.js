const btn = document.getElementById("mode");
const body = document.body;
const h1 = document.getElementById('h');

btn.addEventListener('click', function() {
  if(body.style.backgroundColor === "rgb(23, 22, 26)" || body.style.backgroundColor === ""){
  body.style.backgroundColor='white';
  h.style.color='black';
  btn.innerHTML = "Light mode";
} else {
  body.style.backgroundColor = '#17161a';
  h1.style.color = 'white';
  btn.innerHTML = "Dark mode";
}
});

const todobtn = document.getElementById('todobtn'); 
const input = document.getElementById('input');
const taskList = document.getElementById('taskList');

todobtn.addEventListener('click', function() {
  const taskText = input.value.trim();
  
  if (taskText !== '') { // Check if input is not empty
    const newTask = document.createElement('p');
    newTask.textContent = taskText; // Corrected: 'textContent' instead of 'content'
    taskList.appendChild(newTask);
    newTask.style.cursor = PointerEvent;

  }
  
  if (taskText == ""){
    window.alert("Enter a task")
  }
})

