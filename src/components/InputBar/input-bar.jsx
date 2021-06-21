import { useState } from 'react';

import {
  Input,
  Button,

  message,
  notification,
} from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import { Container } from './input-bar.styles';

export const InputBar = ({ createTodo }) => {
  const [title, setTitle] = useState('');

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const todoTitle = title.trim();

    if (todoTitle.length === 0) {
      message.warning({
        content: 'Задача не может быть пустой!',
        duration: 1,
      });

      return;
    }

    setTitle('');

    createTodo(todoTitle);

    notification.info({
      message: 'Задача была создана!',
      duration: 2,
      placement: 'bottomLeft',
    });
  };

  return (
    <Container>
      <Input
        value={title}
        placeholder="Создайте новую задачу"
        suffix={<Button type="text" icon={<PlusOutlined />} onClick={onSubmit} />}
        onChange={onChange}
        onPressEnter={onSubmit}
      />
    </Container>
  );
};
