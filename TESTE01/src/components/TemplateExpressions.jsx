const TemplateExpressions = () => {
    
    const name = "Luiz Fernando"
    const data = {
        age: 20,
        job: "Programador",
    }
    
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
        </div>
    )
};

export default TemplateExpressions