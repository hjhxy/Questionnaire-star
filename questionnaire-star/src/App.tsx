import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import './App.css';
import { Outlet, RouterProvider } from 'react-router-dom';
import routerConfig from './router';

interface Iprops {
  name?: string, // 可传可不传
  getName?: () => void
}

const App: FC<Iprops> = (props) => {
  return (
    <div className="App">
      {/* routerProvider充当第一级路由 */}
      <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  );
}

export default App;
