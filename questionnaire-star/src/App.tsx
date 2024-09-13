import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import './App.css';

interface Iprops {
  name?: string, // 可传可不传
  getName?: () => void
}

const App: FC<Iprops> = (props) => {
  return (
    <div className="App">
      root
    </div>
  );
}

export default App;
