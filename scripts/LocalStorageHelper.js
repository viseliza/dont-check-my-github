class LocalStorageHelper {
    /**
     * @returns {Array}
     */
    static get todosArray() {
        return JSON.parse(localStorage.getItem("todos")) ?? [];
    }

    /**
     * @returns {number}
     */
    static get lenght() {
        return localStorage.getItem("lenght") ?? 0;
    }

    /**
     * @param {Array} newTodosArray
     */
    static set todosArray(newTodosArray) {
        localStorage.setItem("todos", JSON.stringify(newTodosArray));
    }

    /**
     * @param {string} newLenght
     */
    static set lenght(newLenght) {
        localStorage.setItem("lenght", newLenght);
    }
}