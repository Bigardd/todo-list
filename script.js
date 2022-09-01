"strict";

const form = document.querySelector("#popup-form");
const todo = document.querySelector(".todo-container");
function openForm() {
  form.style.display = "block";
}

function closeForm() {
  form.style.display = "none";
}
function closeTodo() {
  todo.style.display = "none";
  form.style.display = "none";
}

// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
// event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// functions
function addTodo(event) {
  // prevent form from submitting
  event.preventDefault();
  const task = todoInput.value;
  if (!task) {
    prompt(" please input the field");
  }
  // todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // create li
  const newTodo = document.createElement("ul");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  // pending tag
  const pending = document.createElement("button");
  pending.innerHTML = '<i class="far fa-edit"></i>';
  pending.classList.add("pending-btn");
  todoDiv.appendChild(pending);
  pending.addEventListener("click", () => {
    form.style.display = "block";
    todoInput.value = todoDiv.innerText;
    const parent = pending.parentElement;
    parent.parentElement.removeChild(parent);
  });
  // append to list
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  // delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    // animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  // check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");

    pending.classList.add("btn");
  }
}

// pagination
const list_items = [
  "item 1",
  "item 2",
  "item 3",
  "item 4",
  "item 5",
  "item 6",
  "item 7",
  "item 8",
  "item 9",
  "item 10",
  "item 11",
  "item 12",
  "item 13",
  "item 14",
  "item 15",
  "item 16",
  "item 17",
  "item 18",
  "item 20",
];
const list_element = document.getElementById("list");
const pagination_element = document.getElementById("pagination");

let current_page = 1;
let rows = 3;
function displaylist(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page--;
  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; 1 < paginatedItems.length; i++) {
    let item = paginatedItems[i];
    let item_element = document.createElement("div");
    item_element.classlist.add("ul");
    item_element.innertext = item;
    wrapper.appendchild(item_element);
  }
}
function setupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";
  let page_count = math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i);
    wrapper.appendchild(btn);
  }
}
function paginationButton(page) {
  let button = document.createElement("button");
  button.innerText = page;
  if (current_page == page) button.classList.add("active");
  button.addEventListener("click", function () {
    current_page = page;
    displaylist(items, list_element, rows, current_page);
    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classlist.remove("active");
    button.classlist.add("active");
  });
  return button;
}
displaylist(list_items, list_element, rows, current_page);
setupPagination(list_items, pagination_element, rows);
