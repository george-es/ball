import React from 'react'
import {
  BrowserRouter,
} from 'react-router-dom'

interface IRouter {
  children: any
}

const Router: React.FC<IRouter> = ({ children }) => {
  return (
    // 路由最顶层
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

export default Router
