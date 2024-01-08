let todoArray = [];


//input
const text = document.getElementById("text");
//add button
const addTaskButton = document.getElementById("add-task-btn");
//save task button
const saveTaskButton = document.getElementById("save-todo-btn");
//display area for todo array
const listBox = document.getElementById("listBox");
//to lock index
const saveInd = document.getElementById("saveIndex");
//edit button query selector
let editBtns = []
//edit task textbox
let editText = []
//info button that reveals item editing
let infoBtns = []
// Challenge: Try and using your addTaskButton with a "keydown" eventlistener
// and create a way to use the enter key to submit a new list item.

addTaskButton.addEventListener('click', (e) => {

  let item;

  if (text.value === '') {

    console.log('empty input')

  } else {

    todoArray.push([text.value, todoArray.length])

    text.value = ''

  }
  console.log(todoArray)


  for (let i = listBox.childElementCount; i < todoArray.length; i++) {



    item = document.createElement('div')

    item.classList.add('list-item')

    item.innerHTML = `<li >${todoArray[i][0]}</li>
                      <span class='order-buttons'></span>
                      <button class='done' type='submit'>Mark As Done</button>
                      <span class='edit '><input type="text" placeholder="New Task Here" class='edit-task-box'></input> <button id=${todoArray[i][1]} class='edit-btn'>edit task</button></span>
                      
                      `

    item.style.order = todoArray[i][1]

    listBox.appendChild(item)

    editBtns.push(document.querySelectorAll('.edit-btn')[i])

    editText.push(document.querySelectorAll('.edit-task-box')[i])

    document.querySelectorAll('.done')[i].addEventListener('click', (e) => {

      if (listBox.children.length === 1) {

        listBox.removeChild(listBox.children[0])

        todoArray.pop(todoArray[0])

      } else {

        listBox.removeChild(listBox.children[i])

        todoArray.pop(todoArray[i])
      }
    })

    editBtns[i].addEventListener('click', (e) => {

      if (editText[i].value === '') {

        return

      } else {

        console.log('plant')

        todoArray[i][0] = editText[i].value

        listBox.children[i].children[0].textContent = todoArray[i][0]

        editText[i].value = ''
      }

    })







  }



})








// {
// addTaskButton.addEventListener("click", (e) => {
//   e.preventDefault(); // This prevents the page from reloading.
//   // start by setting a variable named todo to equal localstorage.getitem("todo")
//   let todo = localStorage.getItem('todo')
//   // Add code below this line

//   if (todo === null) {

//     // check if todo is null, if it is set todoArray = []
//     todoArray = []

//     console.log('wow')

//   } else {

//     // else set todoArray to JSON.parse() your variable passed into the parse method.
//     todoArray = JSON.parse(todo)

//   }

//   // check if text.value is empty, alert that the input is empty and return
//   if (text.value === '') {

//     console.log('empty input')

//     return
//   }

//   todoArray.push(text.value)

//   text.value = ''

//   localStorage.setItem(todo, JSON.stringify(todoArray))

//   displayTodo()

//   // now that you've parsed the value, push the text.value to the todoArray.
//   // set the text.value to an empty string.
//   // get the localstorage method and use the setItem and pass in todo
//   // and pass in JSON.stringify(todoArray).
//   // lastly call display todo method
// });

// // Add code below this comment to do the following:
// displayTodo()

// // This method is already in place for you.
// function displayTodo() {
//   let todo = localStorage.getItem("todo");
//   if (todo === null) {
//     todoArray = [];
//   } else {
//     todoArray = JSON.parse(todo);
//   }
//   let htmlCode = "";
//   todoArray.forEach((list, ind) => {
//     htmlCode += `<div class='flex mb-4 items-center'>
//     <p class='w-full text-white font-bold'>${list}</p>
//     <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 rounded text-white text-grey bg-green-600'>Edit</button>
//     <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 rounded text-white bg-red-500'>Delete</button>
//     </div>`;
//   });
//   listBox.innerHTML = htmlCode;
// }

// function deleteTodo(ind) {
//   // call the todo and let it equal localstorage.getitem("todo")
//   todo = localStorage.getItem('todo')
//   todoArray = JSON.parse(todo)
//   todoArray.splice(ind, 1)
//   localStorage(todo)
//   JSON.stringify(todoArray)
//   displayTodo()
//   console.log('localStorage')
//   // assign the todoArray equal to JSON.parse(todo)
//   // use the todoArray and use the splice method on the ind and pass in 1 as well.
//   // set the todo in local storage and use the JSON.stringify(todoArray)
//   // call the display todo method
// }

// function edit(ind) {
//   saveInd.value = ind;
//   todo = localStorage.getItem(todo)
//   todoArray = JSON.parse(todo)
//   todoArray.push(text.value, ind)
//   addTaskButton.style.display = 'none'
//   saveTaskButton.style.display = 'block'
//   // set the saveInd.value equal to the ind
//   // call the todo and let it equal localstorage.getitem("todo")
//   // assign the todoArray equal to JSON.parse(todo)
//   // assign the text.value to the array and get the index [ind].
//   // set the addTaskButton display to none
//   // set the saveTaskButton display to block
// }

// // this is the challenge for this project
// // you'll follow a similar pattern above and do the following different:
// // 1. let id be the same as your saveInd.value
// // 2. switch the add and save displays to block and none respectively.
// // 3. set text value to empty
// // 4. and use the localstorage method setItem, pass in todo and stringify the array.
// // 5. display todo method called.
// saveTaskButton.addEventListener("click", () => { });
// }