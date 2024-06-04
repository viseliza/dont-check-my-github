class LocalStorageHelper {
    /**
     * @returns {Array}
     */
    static getValueByKey(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    /**
     * @param {Array} newTodosArray
     */
    static setValueByKey(key, value) {
        localStorage.setItem(key, value);
    }

}