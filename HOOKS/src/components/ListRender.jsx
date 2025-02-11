import React from 'react'
import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(['Luiz', 'Maria', 'Joao'])

    const [users, setUsers] = useState([
        {id: 1, name: 'Luiz', idade: 20},
        {id: 2, name: 'Maria', idade: 21},
        {id: 3, name: 'Joao', idade: 44},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            return prevUsers.filter((user) => user.id !== randomNumber)
        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.idade}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender