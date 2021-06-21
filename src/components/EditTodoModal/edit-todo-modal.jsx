import { Form, Input, Checkbox } from 'antd';

import { Modal } from './edit-todo-modal.styles';

export const EditTodoModal = ({ visible, todo, onEdit, onCancel }) => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form.validateFields().then(onEdit);
  };

  return (
    <Modal
      visible={visible}
      title="Редактирование задачи"
      okText="Редактировать"
      onOk={onSubmit}
      cancelText="Закрыть"
      onCancel={() => {
        form.resetFields();

        onCancel();
      }}
    >
      <Form
        labelCol={{
          span: 5,
        }}
        layout="horizontal"
        form={form}
        initialValues={{
          id: todo.id,
          title: todo.title,
          completed: todo.completed,
        }}
        onFinish={onSubmit}
      >
        <Form.Item name="id" label="ID">
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          name="title"
          label="Задача"
          rules={[{ required: true, message: 'Заметка не может быть пустой!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="completed" label="Завершено" valuePropName="checked">
          <Checkbox />
        </Form.Item>
      </Form>
    </Modal>
  );
};
