import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Row, Col, Card, Typography, Tag, Select, Collapse } from 'antd';
import CodeEditor from '../components/CodeEditor/CodeEditor';

const { Header, Sider, Footer} = Layout;

export default function CodingPage() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
  return (
    <Layout className="neumorphism-layout" style={{height: "100%"}}>
    {/* <Sider trigger={null} collapsible collapsed={collapsed} className="neumorphism-layout" style={{height: "100%"}}> */}
    <Sider trigger={null} collapsible collapsed={collapsed} style={{height: "100%"}}>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={['2']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label: 'Home',
            onClick: () => {navigate("/")}
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: 'Coding',
            onClick: () => {navigate("/Coding")}
          },
          {
            key: '3',
            icon: <VideoCameraOutlined />,
            label: 'Performance',
            onClick: () => {navigate("/Performance")}
          },
          {
            key: '4',
            icon: <VideoCameraOutlined />,
            label: 'Pip',
            onClick: () => {navigate("/Pip")}
          },
          {
            key: '5',
            icon: <UploadOutlined />,
            label: 'History',
            onClick: () => {navigate("/History")}
          },
          {
            key: '6',
            icon: <VideoCameraOutlined />,
            label: 'Settings',
            onClick: () => {navigate("/Settings")}
          }
        ]}
      />
    </Sider>
    <Layout className="neumorphism-layout">
    <Header style={{ padding: 0, backgroundColor: "gray", height: '10%', width: "100%"}} className="neumorphism-layout-header">
      <Button onClick={() => setCollapsed(!collapsed)} >
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      </Header>
    <Row style={{height: "85%"}}>
      <Col span={123} style={{width: "45%"}}>
      <Card style={{ background: 'lightgray', height: '100%', width: "100%" }}>
        <CodeEditor />
        <Row style={{backgroundColor: 'lightblue', height: "50px", marginTop: "20px"}}>
          <Col span={1234} style={{width: '25%'}}>
            <Button>
              <UploadOutlined></UploadOutlined>
              Import
            </Button>
          </Col>
          <Col span={1234} style={{width: '25%'}}>
            <Button>
              <DownloadOutlined></DownloadOutlined>
              Export
            </Button>
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
}
