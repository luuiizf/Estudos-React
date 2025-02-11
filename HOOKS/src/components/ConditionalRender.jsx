import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState('João');

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Se x for false, sim!</p>}
        <h1>IF ternário</h1>
        {name === 'Luiz' ? (
            <div>
                <p>O nome é Luiz</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
        <button onClick={() => setName('Luiz')}>Clica Aqui</button>
    </div>
  )
}

export default ConditionalRender