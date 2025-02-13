import { createContext, useContext, useReducer, useEffect } from 'react';
import { todoReducer } from '../reducers/todoReducer';

const TodoContext = createContext();

// 从 localStorage 获取初始状态
const getInitialState = () => {
  const savedState = localStorage.getItem('todoState');
  if (savedState) {
    try {
      return JSON.parse(savedState);
    } catch (error) {
      console.error('Error parsing saved state:', error);
    }
  }
  return {
    todos: [],
    filter: 'all'
  };
};

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, getInitialState());

  // 当状态改变时保存到 localStorage
  useEffect(() => {
    localStorage.setItem('todoState', JSON.stringify(state));
  }, [state]);

  // 包装 dispatch 函数以处理错误
  const wrappedDispatch = (action) => {
    try {
      dispatch(action);
    } catch (error) {
      console.error('Error dispatching action:', error);
    }
  };

  return (
    <TodoContext.Provider value={{ state, dispatch: wrappedDispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}
