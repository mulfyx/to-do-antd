import { useState } from 'react';

import {
  List,
  Button,
  Popconfirm,

  notification,
} from 'antd';

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { TodoItem } from '../TodoItem';
import { EditTodoModal } from '../EditTodoModal';

export const TodoListItem = ({ todo, editTodo, deleteTodo }) => {
  const [editModalIsVisible, setEditModalIsVisible] = useState(false);

  return (
    <>
      <List.Item
        key={todo.id}
        actions={[
          <Button
            icon={<EditOutlined />}
            onClick={() => {
              setEditModalIsVisible(true);
            }}
          />,
          <Popconfirm
            title="Вы действительно хотите удалить эту задачу?"
            placement="topLeft"
            okText="Да"
            cancelText="Нет"
            onConfirm={() => {
              deleteTodo(todo.id);

              notification.info({
                message: 'Задача была удалена!',
                duration: 2,
                placement: 'bottomLeft',
              });
            }}
          >
            <Button icon={<DeleteOutlined />} />
          </Popconfirm>
        ]}
      >
        <TodoItem
          todo={todo}
          onClick={() => {
            editTodo(todo.id, {
              completed: !todo.completed,
            });
          }}
        />
      </List.Item>
      <EditTodoModal
        visible={editModalIsVisible}
        todo={todo}
        onEdit={(values) => {
          editTodo(todo.id, values);
          setEditModalIsVisible(false);
        }}
        onCancel={() => {
          setEditModalIsVisible(false);
        }}
      />
    </>
  );
};
