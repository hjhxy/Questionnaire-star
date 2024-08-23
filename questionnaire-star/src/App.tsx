import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';
import './App.css';
import Child1 from './components/Child1';

interface Iprops {
  name?: string, // 可传可不传
  getName?: () => void
}

const App: FC<Iprops> = (props) => {
  // const { name, getName } = props;

  // let [number, setNumber] = useState(0); // 无法通过监听数据的修改驱动视图。
  // const [person, setPerson] = useState([1, 2, 3]);

  // // const inputRef = useRef<any>(null);
  // // inputRef.current = 10;

  // console.log(name);

  // // getName!(); // 依然是有可能报错的，但是可以告诉ts的编译器，说这个直接放行即可。
  // getName && getName(); // 这种方式不仅仅可以避免ts的问题还可以避免js运行出错

  // const testPerson = () => { // 驱动试图更新
  //   person.push(22);
  //   console.log(person);
  //   // setNumber(1);
  //   number = 2; // 一样触发 useEffect 方法
  // }

  // useEffect(()=>{
  //   console.log("组件挂载");
  //   return ()=>{
  //     console.log("组件卸载");
  //   }
  // })

  // useEffect(()=>{
  //   console.log("组件更新"); // 只要检测到数据变化
  // }, [number]);

  return (
    <div className="App">
      <Child1/>
    </div>
  );
}

export default App;
