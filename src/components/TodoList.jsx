import { useTodo } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { state, dispatch } = useTodo();

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}
          className={`px-4 py-2 rounded-lg ${state.filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          全部
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}
          className={`px-4 py-2 rounded-lg ${state.filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          进行中
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}
          className={`px-4 py-2 rounded-lg ${state.filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          已完成
        </button>
      </div>
      
      <div className="bg-white rounded-lg border">
        {filteredTodos.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            暂无待办事项
          </div>
        ) : (
          <div>
            {filteredTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
