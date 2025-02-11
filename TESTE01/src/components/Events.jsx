const Events = () => {

    const handleMyEvent = (e) => {
        console.log("Clicou no botão")
    }   

    return (
        <div>
            <div>    
            <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <br></br>
            <div>
            <button onClick={() => console.log("Clicou no botão")}>Clique aqui</button>
            </div>
        </div>
    )
}

export default Events


