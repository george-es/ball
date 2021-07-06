import React from 'react'
import { RouteComponentProps } from 'react-router'
import {
  DribbbleOutlined,
} from '@ant-design/icons';
import SSQLite from '../page/ssqLite';

export interface IRouters {
  id: string | number
  title: string | number
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
  component: SSQLite,
}, {
  title: 'ssqLite',
  path: '/',
  id: '2',
  icon: <DribbbleOutlined />,
  children: [{
    title: 'ssqLite',
    path: '/2',
    id: '3',
  }]
}]