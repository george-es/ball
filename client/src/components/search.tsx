import React from 'react'
import {
  SchemaForm,
  SchemaMarkupField as Field,
  Submit,
  Reset
} from '@formily/antd'
import {
  DatePicker,
} from '@formily/antd-components'

const { RangePicker } = DatePicker;
interface ISearchProps { }

const components = {
  DatePicker,
  RangePicker,
}

const Search: React.FC<ISearchProps> = () => {
  return (
    <SchemaForm
      components={components}
    >
      <Field type="array" name="name" x-component="RangePicker" />
    </SchemaForm>
  )
}

export default Search

