import { useState } from 'react';
import './Contador.css'

function Contador() {


  const [valor, setValor] = useState(0); // variavel de estado
  // let valor: number = 0;
  //valor é a inicial e setValor a atualização

  function somarMaisUm(){
    setValor(valor + 1) // metodos de acesse set
    //valor = valor + 1;
  }

  return (
    <div className="container">

        <p>O valor é: { valor }</p>
        <button onClick= { somarMaisUm }>Adicionar +1</button>

    </div>
  )
}

export default Contador