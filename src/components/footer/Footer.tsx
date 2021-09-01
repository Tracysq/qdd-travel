import React from 'react'
import styles from './Footer.module.css'
import { Layout, Typography } from 'antd';

export const Footer = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{textAlign: 'center'}}>
        版权所有 @qdd-travel
      </Typography.Title>
    </Layout.Footer>
  )
}