import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import "./style/common/components.scss"
import "./style/layout/common-layout.scss";
import "./style/layout/main-layout.scss";
import "./style/common/common.scss";
import "./style/page/home.scss"
import "./style/page/blog.scss"
import "./style/page/about.scss"

window.addEventListener("scroll", () => {})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
