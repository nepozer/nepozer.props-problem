import React, {FC} from 'react';
import './App.css';
import Users from './components/Users';
import { IUser } from './interfaces/IUser';


const users: IUser[]= [
  {"id": 1, "name": "Leanne Graham", "city": "Gwenborough", "username": "Bret",}
]


function App(){
  return (
    <div className="App">
   



     <Users users ={users}/>
    </div>
  );
}

export default App;
