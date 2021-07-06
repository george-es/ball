// 主应用入口
import React, { useState } from 'react'
import { withRouter } from 'react-router';
import { Layout, Menu, Button } from 'antd';
import styled from 'styled-components';
import _ from 'lodash-es'
import {
  Route,
  Switch
} from 'react-router-dom'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import { IRouters, routers } from '../routes/router'

interface IMenuRender {
  routers: IRouters[]
}

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
// css
const SLayout = styled(Layout)`height: 100vh; overflow-y: scroll;`
const SiderButton = styled(Button)`margin-bottom: 27px;`


// template

const MenuRender: React.FC<IMenuRender> = ({ routers }) => {
  const handleGoUrl = () => {
  }
  return (
    _.isArray(routers) ? routers.map((router: IRouters) => (
      _.isArray(router.children) ? (
        <SubMenu key={router.id} icon={router.icon} title={router.title}>
          <MenuRender routers={router.children} />
        </SubMenu>
      ) : (
        <Menu.Item key={router.id} icon={router.icon} onClick={() => handleGoUrl()}>
          {router.title}
        </Menu.Item >
      )
    )) : null
  )
}

const App = (props: any) => {
  console.log(props);
  const [collapsed, setCollapsed] = useState(false)
  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  };
  const handleMenu = () => { }

  return (
    <SLayout>
      <Sider>
        <SiderButton type="primary" onClick={toggleCollapsed}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </SiderButton>
        <Menu
          onClick={handleMenu}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          <MenuRender routers={routers} />
        </Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Switch>
            {routers.map(router => (
              router.component && <Route exact path={router.path} component={router.component}></Route>
            ))}
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </SLayout >
  )
}

export default withRouter(App)
