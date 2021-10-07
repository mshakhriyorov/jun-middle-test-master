import { PlusOutlined, EditOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import 'antd/dist/antd.css'
import * as React from 'react'

import Ellipse from './img/Ellipse.png'
import './index.scss'
import { Container, Frame, User } from './styles'

export interface IProps {}

const { SubMenu } = Menu
const rootSubmenuKeys = ['sub1, sub2, sub3, sub4, sub5, sub6']

export const Example: React.FC<IProps> = () => {
  const [openKeys, setOpenKeys] = React.useState([''])

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  return (
    <>
      <Container>
        <Frame>
          <h1>Saved graphs</h1>
          <section>
            <PlusOutlined />
          </section>
        </Frame>
        <User>
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 'auto' }}
          >
            <SubMenu key="sub1" title="User saved graphs">
              <menu>
                <Menu.Item key="1">
                  <img src={Ellipse} /> .79, 0, 43, 1.04{' '}
                  <strong >
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <menu>
                <Menu.Item key="2">
                  <img src={Ellipse} /> .4, 0, .2, 1{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <menu>
                <Menu.Item key="3">
                  <img src={Ellipse} /> .55, 0, .15, 1{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
            </SubMenu>
            <SubMenu key="sub2" title="Material design presets">
              <menu>
                <Menu.Item key="4">
                  <img src={Ellipse} /> .79, 0, 43, 1.04{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <menu>
                <Menu.Item key="5">
                  <img src={Ellipse} /> .4, 0, .2, 1{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <menu>
                <Menu.Item key="6">
                  <img src={Ellipse} /> .55, 0, .15, 1{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <SubMenu key="sub3" title="Subfolder">
                <menu>
                  <Menu.Item key="7">Option 7</Menu.Item>
                </menu>
                <menu>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </menu>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title="IOS presets">
              <menu>
                <Menu.Item key="9">
                  <img src={Ellipse} /> .79, 0, 43, 1.04{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <menu>
                <Menu.Item key="10">
                  <img src={Ellipse} /> .4, 0, .2, 1{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <menu>
                <Menu.Item key="11">
                  <img src={Ellipse} /> .55, 0, .15, 1{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
            </SubMenu>
            <SubMenu key="sub5" title="Web presets">
              <menu>
                <Menu.Item key="12">
                  <img src={Ellipse} /> .79, 0, 43, 1.04{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <menu>
                <Menu.Item key="13">
                  <img src={Ellipse} /> .4, 0, .2, 1{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <menu>
                <Menu.Item key="14">
                  <img src={Ellipse} /> .55, 0, .15, 1{' '}
                  <strong>
                    <EditOutlined />
                  </strong>
                </Menu.Item>
              </menu>
              <SubMenu key="sub6" title="Subfolder">
                <menu>
                  <Menu.Item key="15">Option 7</Menu.Item>
                </menu>
                <menu>
                  <Menu.Item key="16">Option 8</Menu.Item>
                </menu>
              </SubMenu>
            </SubMenu>
          </Menu>
        </User>
      </Container>
    </>
  )
}
