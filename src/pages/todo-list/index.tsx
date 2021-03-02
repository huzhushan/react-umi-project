import React, { useState } from 'react';
import { connect, Dispatch, ConnectProps } from 'umi';
import { Table, Popconfirm, Button } from 'antd';
import { StateType, TodoItemType } from './models/todo-list'

export interface TodoListProps {
  dispatch: Dispatch;
  products: StateType;
}

const TodoList: React.FC<TodoListProps> = ({ dispatch, products }) => {
  const onDelete = (id: number) => {
    dispatch({
      type: 'TodoList/delete',
      payload: id,
    });
  }
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text: any, record: TodoItemType) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
      rowKey="id"
    />
  );
}

const stateToProps = ({ TodoList }: any) => ({
  products: TodoList.products
})

export default connect(stateToProps)(TodoList);