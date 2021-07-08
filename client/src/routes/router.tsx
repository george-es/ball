import React from 'react'
import { RouteComponentProps } from 'react-router'
import {
  DribbbleOutlined,
} from '@ant-design/icons';
import asyncComponent from '../utils/asyncComponent.jsx';

const ssqlite = asyncComponent(() => import('../page/ssqLite'));
// import SSQLite from '../page/ssqLite';
import Page404 from '../page/404'

export interface IRouters {
  id: string | number
  title: string | number
  isShow?: boolean
  path?: string
  icon?: React.ReactNode
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | any
  children?: IRouters[]
  // group?: IRouters[]
}

export const routers: IRouters[] = [{
  title: 'ssqLite',
  path: '/ssq-lite',
  id: '1',
  icon: <DribbbleOutlined />,
  component: ssqlite,
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