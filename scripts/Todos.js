class Todos {
    constructor() {
        this.todosArray = [];
        this.length = localStorage.getItem("lenght") ?? 0;
        
        Object.keys(localStorage).forEach((key) => {
            if (key == "lenght") return;
            const todo = JSON.parse(localStorage.getItem(key));
            this.todosArray = [...this.todosArray, todo];
            HTMLHelper.drawTask(todo, true);
            this.length++;
        });
        HTMLHelper.updateTitle();
    }

    /**
     * Добавляет новую заметку в список заметок и сохраняет в local storage
     */
    add() {
        const text = document.getElementById('todo-text').value;
        if (!text) return;
        
        const todo = {
            id: this.length,
            text,
            dateStart: new Date(),
            status: "not-done",
            dateEnd: undefined
        };
        HTMLHelper.drawTask(todo);

        this.todosArray = [...this.todosArray, todo];
        localStorage.setItem(todo.id, JSON.stringify(todo));
        
        HTMLHelper.updateTitle();
        localStorage.setItem("lenght", this.length);
        this.length++;
    }


    /**
     * Удаление выбранной заметки
     * @param {number} id Номер заметки 
     */
    remove(id) {
        const todoById = this.todosArray.filter(todo => todo.id = id);
        
        if (todoById.status == "done") return;

        const todos =  document.getElementsByClassName("todos")[0];
        todos.removeChild(todos.getElementsByClassName(`todo todo-${id}`)[0]);
        this.todosArray = this.todosArray.filter(todo => todo.id != id);
        localStorage.removeItem(id);
        HTMLHelper.updateTitle();
    }


    /**
     * Добавление заметки в раздел выполненных заметок
     * @param {number} id Номер заметки 
     */
    done(id) {
        let todoById = this.todosArray.filter(todo => todo.id == id)[0];

        if (todoById.status == "done") return;

        const todos =  document.getElementsByClassName("todos")[0];
        const todo = todos.getElementsByClassName(`todo todo-${id}`)[0];
        todo.getElementsByClassName("text")[0].style.textDecoration = "line-through";
        todo.getElementsByClassName("fa fa-close")[0].className = "fa fa-close disable";
        this.todosArray = this.todosArray.map(todo => {
            if (todo.id == id)
                todo.status = "done"
            return todo;
        });
        todoById = this.todosArray.filter(todo => todo.id == id)[0];
        localStorage.setItem(id, JSON.stringify(todoById));

        HTMLHelper.updateTitle();
        HTMLHelper.drawTask(todoById);
    }
}