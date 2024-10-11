import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

import "./styles/components/index.scss"
import {useEffect, useRef} from "react";
import Lenis from "@studio-freight/lenis";

function App() {

  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,     // 通过更改滚动的持续时间控制平滑度
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // 自定义滚动缓动函数
      infinite: false,    // 是否无限滚动
    });
    lenisRef.current = lenis;
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div id="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
