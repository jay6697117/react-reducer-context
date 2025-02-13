import { useTodo } from '../context/TodoContext';

export function TodoItem({ todo }) {
  const { dispatch } = useTodo();

  return (
    <div className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
          className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <span className={todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
        className="px-3 py-1 text-sm text-red-500 hover:bg-red-50 rounded"
      >
        删除
      </button>
    </div>
  );
}
