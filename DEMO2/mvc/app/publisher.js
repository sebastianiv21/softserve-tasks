export default class Publisher{
    static #listeners = {};

    static #isEvent = (event) => {
        if(!Publisher.#listeners[event]){
            Publisher.#listeners[event] = [];
        }
    }

    static subscribe = (event, callback) => {
        Publisher.#isEvent(event);

        Publisher.#listeners[event].push(callback);
    }    

    static unsubscribe = (event, callback) => {
        Publisher.#isEvent(event);

        const index = Publisher.#listeners[event].indexOf(callback);

        Publisher.#listeners[event].splice(index, 1);
    }

    static notify = (event, data) => {
        Publisher.#isEvent(event);

        Publisher.#listeners[event].forEach(callback => callback(data));
    }

}