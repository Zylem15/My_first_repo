import { useState } from "react";

export const FirstPage = () => {
    const [Valor, setValor] = useState(10)
    
    const modificar = (num) => {
        
            setValor(Math.max(Valor + num, 1));
        
    }

    const reset  = () => {
        setValor(10)
    }

    return (
        <div>
        <h1> carisma</h1>
        <hr />
        <h1> {Valor} mamahuevo</h1>
        <button onClick={() => modificar(+1)}>+ 1 de carisma</button>
        <button onClick={() => modificar(-1)}>- 1 de carisma</button>
        <button onClick={reset}>carisma inicial</button>
        </div>
    )

}