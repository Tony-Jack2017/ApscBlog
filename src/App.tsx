import React from 'react';
import './App.css';
import MainLayout from "./layouts/MainLayout";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainLayout isSticky={true} stickyHeight={300}>
          <Outlet />
      </MainLayout>
    </div>
  );
}

export default App;
