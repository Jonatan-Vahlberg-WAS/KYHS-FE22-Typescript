import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './components/UserInfo';
import SpoilerText from './components/SpoilerText';
import TodoList from './components/TodoList';

function App() {
  const divRef = useRef<HTMLDivElement>(null);

useEffect(() => {
	if(divRef.current){
		const width = divRef.current.clientWidth;
    console.log(width);
	}
},[divRef])
  return (
    <div className="App" ref={divRef}>
      <UserInfo
        name="John Doe"
        age={18}
        email="johndoe@example.com"
        greeting="Hello World!"
      >
        I can only be a string
      </UserInfo>
      Lorem ipsum dolor sit amet&nbsp;
      <SpoilerText
        spoilerColor="red"
        className='spoiler-text'
        style={{
          fontWeight: 'bold',
        }}
      >
        consectetur adipisicing elit.
      </SpoilerText>
      &nbsp;Esse quaerat ullam officia tempora, quia itaque blanditiis placeat nihil voluptates maxime. Ducimus laboriosam quia ipsa suscipit in consequuntur sapiente illum fuga?
        <TodoList/>
    </div>
  );
}

export default App;
