import React from 'react';
import useAddTodo from './hooks/useAddTodo'
import InputComponent from './components/inputComponent'
import Header from './components/header'
import ListingTodoModel from '../src/models/todoModel'
import ListingComponent from './components/listingComponent'
import './App.css';

function App() {
  const {setStrikeUnStrike,setText,list} = useAddTodo()
  return (
      <div className="App-header">
      <Header datatestid="top-header" heading='Todo App'/>
      <InputComponent buttonClickCallback={setText}/>
      <Header datatestid="list-header" heading={ListingTodoModel.getHeaderTitleForTodoList(list)}/>
      <ListingComponent 
        modelList={list} 
        onClickStriker={setStrikeUnStrike}
        />
      </div>
  );
}

export default App;
