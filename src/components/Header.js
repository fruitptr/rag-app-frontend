import React from 'react';
import { Menu } from 'antd';

const items1 = [
  { key: '1', label: 'Home' },
  { key: '2', label: 'Chat' },
  { key: '3', label: 'Generate Quiz' }
];

const AppHeader = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        background: '#001529',
        padding: '0 16px',
      }}
    >
      <div style={{ marginRight: '16px', color: 'white', fontSize: '20px' }}>
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          style={{ marginRight: '16px', verticalAlign: 'middle' }}
        />
        Sample Page
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items1}
        style={{
          flex: 1,
          minWidth: 0,
        }}
      />
    </header>
  );
};

export default AppHeader;
