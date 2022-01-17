import React from 'react'
import { RouteComponentProps } from 'react-router'
import {
  DribbbleOutlined,
} from '@ant-design/icons';
import asyncComponent from '../utils/asyncComponent';

const dataAnalysis = asyncComponent(() => import('../page/ssqLite/dataAnalysis'));
// import SSQLite from '../page/ssqLite';
import Page404 from '../page/404'

export interface IRouters {
  id: string | number
  title: string | number
  isShow?: boolean
  path?: string // 有 children 情况下不用填这个
  icon?: React.ReactNode
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | any
  children?: IRouters[]
}

export const routers: IRouters[] = [{
  title: '双色球',
  id: '1',
  icon: <DribbbleOutlined />,
  children: [{
    title: '数据分析',
    path: '/ssq-lite/data-analysis',
    id: '1.1',
    component: dataAnalysis,
  }]
}, {
  title: '404',
  path: '/404',
  id: '1',
  isShow: false,
  icon: <DribbbleOutlined />,
  component: Page404,
}, {
  title: 'test',
  path: '/test',
  id: '2',
  icon: <DribbbleOutlined />,
  children: [{
    title: 'test-children',
    path: '/test-children',
    id: '2.1',
  }]
}]