import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Row, Col, Card, Typography, Tag } from 'antd';
import CodeEditor from './components/CodeEditor/CodeEditor';
import '/styles/main.sass'

const { Header, Sider, Footer} = Layout;

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [code, setCode] = useState<string>("#!/pywiz/env python3.11")

  return (
    <Layout className="neumorphism-layout" style={{height: "100%"}}>
      {/* <Sider trigger={null} collapsible collapsed={collapsed} className="neumorphism-layout" style={{height: "100%"}}> */}
      <Sider trigger={null} collapsible collapsed={collapsed} style={{height: "100%"}}>
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />,
              label: 'Collapse',
              onClick: () => setCollapsed(!collapsed)
            },
            {
              key: '4',
              icon: <VideoCameraOutlined />,
              label: 'Performance',
            },
            {
              key: '5',
              icon: <VideoCameraOutlined />,
              label: 'Pip',
            },
            {
              key: '6',
              icon: <UploadOutlined />,
              label: 'History',
            },
            {
              key: '7',
              icon: <UploadOutlined />,
              label: 'Settings',
            },
          ]}
        />
      </Sider>
      <Layout className="neumorphism-layout">
      <Header style={{ padding: 0, backgroundColor: "gray", height: '10%', width: "100%"}} className="neumorphism-layout-header">
        </Header>
      <Row style={{height: "85%"}}>
        <Col span={123} style={{width: "45%"}}>
        <Card style={{ background: 'lightgray', height: '100%', width: "100%" }}>
          <CodeEditor code={code} setCode={setCode}/>
          <Row style={{backgroundColor: 'lightblue', height: "50px", marginTop: "20px"}}>
            <Col span={1234} style={{width: '25%'}}>
              <Button>Import</Button>
            </Col>
            <Col span={1234} style={{width: '25%'}}>
              <Button>Export</Button>
            </Col>
            <Col span={1234} style={{width: '25%'}}>
            <Button>Format</Button>
            </Col>
            <Col span={1234} style={{width: '25%'}}>
            <Button>Execute</Button>
            </Col>
          </Row>
        </Card>
        </Col>
        <Col span={123} style={{width: "10%", backgroundColor: 'gray'}}>
          {/* <Tag style={{width: "100%", textAlign: "center"}}>Mode</Tag> */}
          <Menu
            mode="inline"
            theme="dark"
            style={{marginTop: "40%", backgroundColor: "lightsalmon"}}
            items={[
              {
                key: '1',
                label: 'Normal',
              },
              {
                key: '2',
                label: 'Graph'
              },
              {
                key: '3',
                label: 'Object',
              },
              {
                key: '4',
                label: 'Oneline',
              },
              {
                key: '5',
                label: 'Profile',
              },
              {
                key: '6',
                label: 'VizTracer',
              },
            ]}
          />
          <Menu
            mode="inline"
            theme="dark"
            style={{marginTop: "40%", backgroundColor: "lightsalmon"}}
            items={[
              {
                key: '1',
                label: 'First',
              },
              {
                key: '2',
                label: 'Next'
              },
              {
                key: '3',
                label: 'Prev',
              },
              {
                key: '4',
                label: 'Last',
              }
            ]}
          />
        {/* </Sider> */}
        </Col>
        <Col span={123} style={{width: "45%"}}>
          <Card style={{ background: 'lightgray', height: '100%', width: "100%" }}>
          </Card>
        </Col>
    </Row>
    <Row style={{height: "5%"}}>
    </Row>
      </Layout>
    </Layout>
  );
};