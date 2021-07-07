import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { routers } from './router'
const AppRouter: React.FC = () => (
  <Switch>
    {routers.map(router => (
      router.component && <Route key={router.id} path={router.path} component={router.component}></Route>
    ))}
  </Switch>
)

export default AppRouter
