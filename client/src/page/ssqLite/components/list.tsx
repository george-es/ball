import React from 'react'
import { Table } from 'antd'


interface IListProps { }
const columns = [
  {
    title: '期号',
    dataIndex: 'name',
    sorter: true,
    // render: name => `${name.first} ${name.last}`,
    width: '20%'
  },
  {
    title: '日期',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: '红球',
    dataIndex: 'email'
  },
  {
    title: '蓝球',
    dataIndex: 'email'
  },
  {
    title: '红球加权',
    dataIndex: 'email'
  }
]

const List: React.FC<IListProps> = () => {
  return (
    <>
      <Table
        columns={columns}
      />
    </>
  )
}

export default List
