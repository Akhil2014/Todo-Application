import { ADD_TODO, DELETE_TODO, EDIT, REMOVE_ALL, TOGGLE } from "./actionType";

const initState = {
  todos: [
    {
      id: 1,
      task: "akhil khan",
      status: false
    }
  ]
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    }
    case DELETE_TODO: {
      const newTodo = state.todos.filter((e) => e.id !== payload);
      return {
        ...state,
        todos: newTodo
      };
    }
    case REMOVE_ALL: {
      return {
        ...state,
        todos: []
      };
    }
    case TOGGLE: {
      const n = state.todos.length;
      for (let i = 0; i < n; i++) {
        if (i === payload) {
          if (state.todos[i].status === true) {
            state.todos[i].status = false;
          } else {
            state.todos[i].status = true;
          }
        }
      }
      return {
        ...state,
        todos: [...state.todos]
      };
    }
    case EDIT:
      {
        console.log(payload);
        const n = state.todos.length;
        for (let i = 0; i < n; i++) {
          if (i === payload.payload) {
            state.todos[i].task = payload.name;
          }
        }
      }
      return {
        ...state,
        todos: [...state.todos]
      };
    default:
      return state;
  }
};

export { reducer };
