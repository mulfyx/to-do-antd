import { uid } from 'uid';
import { createLocalStorageStateHook } from 'use-local-storage-state';

import { InputBar } from '../InputBar';
import { TodoList } from '../TodoList';

import { Container } from './app.styles';

const useTodos = createLocalStorageStateHook('todos', [
  {
    id: uid(),
    title: 'Первая задача',
    completed: false,
  },
  {
    id: uid(),
    title: 'А это вторая задача',
    completed: true,
  },
]);

export const App = () => {
  const [todos, setTodos] = useTodos();

  const createTodo = (title) => {
    const newTodo = {
      id: uid(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, values) => {
    const callback = (todo) => {
      if (todo.id !== id) {
        return todo;
      }

      return {
        ...todo,
        ...values,
      };
    };

    setTodos((todos) => todos.map(callback));
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <InputBar
        createTodo={createTodo}
      />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </Container>
  );
};
