import { Container, Text } from './todo-item.styles';

export const TodoItem = ({ todo, onClick }) => {
  return (
    <Container onClick={onClick}>
      <span>•</span>
      <Text completed={todo.completed}>
        {todo.title}
      </Text>
    </Container>
  );
};
