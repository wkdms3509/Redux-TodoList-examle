// 액션 타입 정의
const TODO_INSERT = "TODO/INSERT";
const TODO_REMOVE = "TODO_REMOVE";
const TODO_UPDATE = "TODO_UPDATE";
const TODO_TOGGLE = "TODO_TOGGLE";

// state 초기값
const initState = {
  todos: [
    {
      id: 1,
      text: "계획1",
      isCompleted: false,
    },
  ],
};

// 액션 생성 함수
// 1. todoInsert 액션
export const todoInsert = (id, text) => {
    return {
        type: TODO_INSERT,
        payload: {
            id: id,
            text: text,
            isCompleted: false,
        },
    };
};

// 2. todoRemove 액션
export const todoRemove = (id) => {
    return {
        type: TODO_REMOVE,
        payload: {
            id: id,
        },
    };
};


// 3. todoUpdate 액션
export const todoUpdate = (id, text) => {
    return {
        type: TODO_UPDATE,
        payload: {
            id: id,
            text: text,
        },
    };
};

// 4. todoUpdate 액션
export const todoToggle = (id) => {
    return {
        type: TODO_TOGGLE,
        payload: {id: id},
    };
};

// 리듀서
export function todoReducer(state = initState, {type,payload}) {
  switch (type) {
    case TODO_INSERT:
      return {
        ...state,
        todos: state.todos.concat({
          id: payload.id,
          text: payload.text,
          isCompleted: false,
        }),
      };
    case TODO_REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload.id),
      };
    case TODO_UPDATE:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === payload.id ? {...todo, text: payload.text} : todo),
      };
    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo => 
          todo.id === payload.id ? {...todo, isCompleted: !todo.isCompleted} : todo),
      };
  
    default:
      return {...state};
  }
}