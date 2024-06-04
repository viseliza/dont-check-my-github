class HTMLHelper {
    /**
     * Обновление заголовков
     */
    static updateTitle() {
        const todos = document.getElementsByClassName("todo-not-done");
        const doneTodos = document.getElementsByClassName("todo-done");
        document.getElementById("h1-todos").textContent = todos.length ? `Все заметки: ${todos.length}` : "";
        document.getElementById("h1-done-todos").textContent = doneTodos.length ?`Выполненные заметки: ${doneTodos.length}` : "";
    }

    /**
     * @param {number} id Номер заметки
     * @param {string} text Текст заметки
     * @param {string} status Статус заметки
     * @param {Date} dateStart Дата создания заметки
     * @param {Date | undefined} dateEnd Дата создания заметки
     * Отрисовывает заметку
     */
    static drawTask({id, text, dateStart, status, dateEnd = undefined}, fullRender = false) {
        dateStart = new Date(dateStart);

        if (status != "done") {
            document.getElementsByClassName("todos")[0].innerHTML += `
                <section class="todo todo-${id} todo-not-done">
                    <span class="text">${text}</span>
                    <i onclick="done(${id})" class="fa fa-check"></i>
                    <i onclick="remove(${id})" class="fa fa-trash"></i>
                    <span class="time">${dateStart.toLocaleDateString()} ${dateStart.toLocaleTimeString()}</span>
                <section/>
            `;
        } else {
            document.getElementsByClassName("todos-done")[0].innerHTML += `
                <section class="todo todo-${id} todo-done">
                    <span class="text">${text}</span>
                    <span class="time">${dateStart.toLocaleDateString()} ${dateStart.toLocaleTimeString()}</span>
                <section/>
            `;
        }
        this.updateTitle();
    }   
}