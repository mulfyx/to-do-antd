import { TodoListItem } from '../TodoItemList';

import { List } from './todo-list.styles';

export const TodoList = (props) => {
  return (
    <List
      locale={{
        emptyText: 'Список задач пуст'
      }}
      dataSource={props.todos}
      renderItem={(todo) => {
        return (
          <TodoListItem
            todo={todo}
            editTodo={props.editTodo}
            deleteTodo={props.deleteTodo}
          />
        );
      }}
    />
  );
};
