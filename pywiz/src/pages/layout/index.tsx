import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Row, Col, Card, Typography, Tag } from 'antd';
import CodeEditor from '../../components/CodeEditor/CodeEditor';

const { Header, Sider, Footer} = Layout;

export default function PageLayout() {
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
    </Layout>
  </Layout>
);
}
