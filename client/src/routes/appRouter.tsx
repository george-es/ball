import React from 'react'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { routers } from './router'
// const AppRouter: React.FC = () => (
//   <Switch>
//     {routers.map(router => {
//       const { component, id, path, } = router
//       return (
//         component && <Route key={id} path={path} component={component}></Route>
//       )
//     })}
//     <Redirect
//       to='/404'
//     />
//   </Switch>
// )
const MyRouter = ({ path, id, component, children }: any) => (
  Array.isArray(children) && children.length > 0
    ? children.map(item => <MyRouter {...item}/>)
    : <Route key={id} path={path} component={component}></Route>
)

const AppRouter: React.FC = () => (
  <Switch>
    {routers.map(router => (<MyRouter {...router} />))}
    <Redirect
      to='/404'
    />
  </Switch>
)


export default AppRouter

