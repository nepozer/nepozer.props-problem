
import React, { useEffect, useState } from 'react';
import './App.css';
import { UserCard } from './components/UserCard';
import { IUser } from './interfaces/IUser';




function App() {
  const [storage, setStorage] = useState<IUser[]>()
  const [inputId, setInputId] = useState<string>('')

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setInputId(inputValue)
  }


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setStorage)
  }, [])

  const storageToCards = storage
    ?.filter(user => inputId === ''? user.id : inputId=== user.id.toString())
    ?.map(user => <UserCard key = {user.id} user={user} />)

  return (
    <div className="App" >
      <input type="text" value={inputId} onChange={handlerChange} />

      {storageToCards}
    </div>
  );
}

export default App;
