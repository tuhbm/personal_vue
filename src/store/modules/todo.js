const state = {
    todos: [
        { id: 1, text: '할일1', done: false, removeStatus: false },
        { id: 2, text: '할일2', done: true, removeStatus: false},
        { id: 3, text: '할일3', done: true, removeStatus: false},
        { id: 4, text: '할일4', done: false, removeStatus: false },
        { id: 5, text: '할일5', done: false, removeStatus: false },
        { id: 6, text: '할일6', done: true, removeStatus: true },
        { id: 7, text: '할일7', done: false, removeStatus: true },
        { id: 8, text: '할일7', done: false, removeStatus: true }
    ]
};

const getters = {
    getProgressItem: state => {
        return state.todos.filter(todo => !todo.done && !todo.removeStatus);
    },
    getFinishItem: state => {
        return state.todos.filter(todo => todo.done && !todo.removeStatus);
    },
    getDeleteItem: state => {
        return state.todos.filter(todo => todo.removeStatus);
    }
};
const actions = {
};
const mutations = {
    addTodoItem(state, text) {
        const _ID = Date.parse(new Date());// ID값 고민해봐야댐.
        const obj = {
            id: _ID,
            text: text,
            done: false,
            removeStatus: false
        };
        state.todos.push(obj);
    },
    toggleRemoveState(state, payload) {
        const itemIndex = payload.item.id - 1;
        state.todos[itemIndex].removeStatus = !state.todos[itemIndex].removeStatus;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
