import { useState } from 'react';
import './App.css';
import Users from './components/Users';
import CreateUser from './components/CreateUser';

function App() {
  const [appstate, setAppState] = useState({
    isAddEdit: false
  });
  const {isAddEdit} = appstate;

  const evtShowAddEdit = ()=>{
    setAppState(
      {
        isAddEdit : true,
      }
    )
  }
  const evtShowUsers = ()=>{
    setAppState(
      {
        isAddEdit : false,
      }
    )
  }
  return (
    <>
      {
        isAddEdit ? <CreateUser evtShowUsers= {evtShowUsers} /> :  <Users evtShowAddEdit = {evtShowAddEdit} />
      }
    </>
  );
}

export default App;
