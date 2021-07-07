// 主应用入口
import React, { useState } from 'react'
import { withRouter, RouteComponentProps } from 'react-router';
import { Layout, Menu, Button } from 'antd';
import styled from 'styled-components';
import _ from 'lodash-es'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';


import AppRouter from '../routes/appRouter'
import { IRouters, routers } from '../routes/router'


interface IMenuRender extends RouteComponentProps {
  routers: IRouters[]
}
type TMenuRender = Pick<IMenuRender, 'history' | 'routers'>

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;
// css
const SLayout = styled(Layout)`height: 100vh; overflow-y: scroll;`
const SiderButton = styled(Button)`margin-bottom: 27px;`


// template

const MenuRender: React.FC<TMenuRender> = ({ routers, history }) => {
  const handleGoUrl = (path: string) => {
    history.push(path)
  }
  return (
    /*
    这里如果没有包裹 <></> 就会报
    不能将类型“({ routers, history }: PropsWithChildren<TMenuRender>) => Element[] | null”分配给类型“FC<TMenuRender>”。
    不能将类型“Element[] | null”分配给类型“ReactElement<any, any> | null”。
    类型“Element[]”缺少类型“ReactElement<any, any>”中的以下属性: type, props, key
    也就是说返回值必须也保证 <></>在最外层
     */
    <> 
      {
        _.isArray(routers) ? routers.map((router: IRouters) => (
          _.isArray(router.children) ? (
            <SubMenu key={router.id} icon={router.icon} title={router.title}>
              <MenuRender routers={router.children} history={ history }/>
            </SubMenu>
          ) : (
            <Menu.Item key={router.id} icon={router.icon} onClick={() => handleGoUrl(router.path as string)}>
              {router.title}
            </Menu.Item >
          )
        )) : null
      }
    </>
  )
}

interface IApp extends RouteComponentProps  {}

const App: React.FC<IApp> = ({ history }) => {
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
          <MenuRender routers={routers} history={history} />
        </Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <AppRouter />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </SLayout >
  )
}

export default withRouter(App)
