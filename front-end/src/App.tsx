import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import MainPageContainer from './layout/MainPageContainer';

function App() {
  return (
    <BrowserRouter>
      <MainPageContainer />
    </BrowserRouter>
  );
}

export default App;
