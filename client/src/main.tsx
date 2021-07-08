// 入口文件
import React from 'react'
import ReactDOM from 'react-dom'
// 注入 redux 关键
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from './page/app'
import Router from './routes'
import './index.css'
import 'antd/dist/antd.css'

const MOUNT_NODE = document.getElementById('root')
const store = configureStore({
  reducer: {},
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider> 
  </React.StrictMode>,
  MOUNT_NODE
)
