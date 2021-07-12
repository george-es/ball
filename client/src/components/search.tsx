import React from 'react'
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  Reset
} from '@formily/antd'
import {
  DatePicker,
} from '@formily/antd-components'
import locale from 'antd/es/date-picker/locale/zh_CN';

const { RangePicker } = DatePicker;
interface ISearchProps { }

const components = {
  RangePicker,
}

const DISABLE_DATE = '2003/01/01'

const initialValues = {
  date: ['2003/01/01']
}

const Search: React.FC<ISearchProps> = () => {
  return (
    <SchemaForm
      initialValues={initialValues}
      components={components}
      inline
    >
      <Field
        type="array"
        name="date"
        x-component="RangePicker"
        x-component-props={{
          showToday: true,
          defaultValue: [new Date(), new Date()],
          disabledDate: (current: Date) => new Date(current).getTime() < new Date(DISABLE_DATE).getTime(),
          locale
        }} />
      <FormButtonGroup offset={5}>
        <Submit>查询</Submit>
        <Reset>重置</Reset>
      </FormButtonGroup>
    </SchemaForm>
  )
}

export default Search

