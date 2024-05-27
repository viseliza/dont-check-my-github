let todosArray = [];
let todos, helper;

document.addEventListener("DOMContentLoaded", () => {
    todos = new Todos();
    helper = new HTMLHelper();
});


const add = () => todos.add();
const remove = (id) => todos.remove(id);
const done = (id) => todos.done(id);
