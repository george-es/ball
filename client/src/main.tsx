// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
import App from './page/app'
import Routers from './routes'
import './index.css'
import 'antd/dist/antd.css'

const MOUNT_NODE = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Routers>
      <App />
    </Routers>
  </React.StrictMode>,
  MOUNT_NODE
)
