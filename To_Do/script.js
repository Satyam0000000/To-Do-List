let today = document.querySelector("#today");
let greet = document.querySelector("#greet");
let task = document.querySelector("#add-task");
let main = document.querySelector("#main")
let create_task = document.createElement('div')

today.addEventListener("click",()=>{
  task.style.zIndex='999';
  const date = new Date();
  const day = date.getDate();
  const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
  ];
  const monthName = monthNames[date.getMonth()]; // Get month name
  const dayNames = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const dayName = dayNames[date.getDay()];
  console.log(`${date.getDate()}`)
  greet.textContent = `${dayName}, ${monthName} ${day}`;
  
})
let i=1
task.addEventListener('keydown',function(e){
    // e.preventDefault();
  if(e.key == "Enter"){
     e.preventDefault();
     let newTask = document.createElement('div')
      newTask.style.padding ='3px 3px' 
      newTask.style.backgroundColor = 'black'
      newTask.style.fontSize = '20px'
      newTask.style.borderRadius = '20px'
     newTask.textContent = `${i}-> `+task.value
     main.appendChild(newTask)
    task.value = ""
    i++
  }
  
})
