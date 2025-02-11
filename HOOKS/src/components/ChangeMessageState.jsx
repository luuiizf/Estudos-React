import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3']

  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}>Mensagem 1</button>
        <button onClick={() => handleMessage(messages[1])}>Mensagem 2</button>
        <button onClick={() => handleMessage(messages[2])}>Mensagem 3</button>
    </div>
  )
}

export default ChangeMessageState