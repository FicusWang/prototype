import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftSideBarContainer() {
  return (
    <Menu mode="inline">
      <Menu.Item>
        <Link to="/">Menu</Link>
      </Menu.Item>
      <SubMenu title="User">
        <Menu.Item>
          <Link to="/register">Register</Link>
        </Menu.Item>
        <Menu.Item>Login</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
