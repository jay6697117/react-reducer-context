import { TodoProvider } from './context/TodoContext';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="container mx-auto max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Todo List
          </h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
