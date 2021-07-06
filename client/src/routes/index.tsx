import React, { Children } from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import { IRouters, routers } from './router'

interface IAppRouter {
  children: any
}

const AppRouter: React.FC<IAppRouter> = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

export default AppRouter
