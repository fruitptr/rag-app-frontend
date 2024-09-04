import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const ContentArea = () => {
  return (
    <Content
      style={{
        padding: '0 24px',
        minHeight: 280,
      }}
    >
      Content
    </Content>
  );
};

export default ContentArea;