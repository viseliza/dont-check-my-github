class Todos {
    constructor() {
        this.todosArray = JSON.parse(LocalStorageHelper.todosArray);
        this.length = LocalStorageHelper.lenght;
        
        this.todosArray.forEach((todo) => {
            HTMLHelper.drawTask(todo, true);
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
        LocalStorageHelper.todosArray = JSON.stringify(this.todosArray); 
        // localStorage.setItem("todos", JSON.stringify(this.todosArray));
        
        HTMLHelper.updateTitle();
        this.length++;
        LocalStorageHelper.lenght = this.length;
        // localStorage.setItem("lenght", this.length);
    }


    /**
     * Удаление выбранной заметки
     * @param {number} id Номер заметки 
     */
    remove(id) {
        let todoById = this.todosArray.filter(todo => todo.id == id)[0];

        if (todoById.status == "done") return;
        
        const todos =  document.getElementsByClassName("todos")[0];
        todos.removeChild(todos.getElementsByClassName(`todo todo-${id}`)[0]);
        this.todosArray = this.todosArray.filter(todo => todo.id != id);
        LocalStorageHelper.todosArray = JSON.stringify(this.todosArray); 
        // localStorage.setItem("todos", JSON.stringify(this.todosArray));
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
        todo.remove();
        this.todosArray = this.todosArray.map(todo => {
            if (todo.id == id)
                todo.status = "done"
            return todo;
        });
        todoById = this.todosArray.filter(todo => todo.id == id)[0];
        LocalStorageHelper.todosArray = JSON.stringify(this.todosArray);
        // localStorage.setItem("todos", JSON.stringify(this.todosArray));

        HTMLHelper.updateTitle();
        HTMLHelper.drawTask(todoById);
    }
}