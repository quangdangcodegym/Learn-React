import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import {v4} from 'uuid';
function App() {

  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  const onTextInputChange = (e)=>{
    setTextInput(e.target.value);
  }
  const handleAddClick= (e)=>{
    setTodoList([...todoList, {id: v4(), name: textInput, isComplete: false}])
  }

  return (
    <>
      {console.log("RENDER APP")}
      <h3>Danh sách cần làm</h3>
      <TextField className='padding-btn' name="add-todo" placeholder='Thêm việc làm' elemAfterInput={
              <Button isDisabled={!textInput} appearance='primary' onClick={handleAddClick}>Thêm</Button>
          } 
          value={textInput}
          onChange={onTextInputChange}
      >
        
      </TextField>
      <TodoList todoList = {todoList} />
    </>
  );
}

export default App;
