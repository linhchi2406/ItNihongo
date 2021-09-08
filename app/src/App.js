import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [items, setItem] = useState(['Huyen', 'Hoa', 'Hung', 'Long']);
  const [count, setCount] = useState(0);

  const onClickPrev = () =>{
    if(count <= 0){
      setCount( 0);
     }else{
       setCount(count--);
     }
  };
  const onClickNext = () =>{
    if(count >= 3){
      setCount(3);
     }else{
       setCount(count++);
     }
     console.log(count);
  };
  
  let element = items.map((item)=>
  {
    return <span>{item} ,</span>
  } );
  
  return (
    <div className="container-fluid row d-flex justify-content-between">
      <div>学生一層: [ {element}]</div>
      <div className="col-8">
        <p>位置：{count + 1}</p>
        <p>名前：{items[count]}</p>
      </div>
      <button type="button" onClick={()=>onClickPrev} className="btn btn-danger">前に</button>
      <button type="button" onClick={()=>onClickNext} className="btn btn-primary">次に</button>
    </div>
  );
}

export default App;
