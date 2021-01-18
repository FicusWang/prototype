import { Layout } from 'antd';
import React from 'react';
import LeftSideBarContainer from './LeftSideBarContainer';
import MainContentContainer from './MainContentContainer';

const { Content, Sider } = Layout;

export default function MainPageContainer() {
  return (
    <div>
      <Layout>
        <Sider>
          <LeftSideBarContainer />
        </Sider>
        <Layout>
          <Content>
            <MainContentContainer />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
