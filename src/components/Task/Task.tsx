import { useEffect, useState } from 'react';
import './Task.css'

function Task() {

  const [completada, setCompletada] = useState(false);
  const [tarefa, setTarefa] = useState("");

  useEffect(() => {

      if(completada == true){
        setTarefa("Parabéns! Você concluiu a tarefa!")
      }


  }, [ completada ]);

  //() => {}: função 
  //[]: Array/vetor

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa</h3>
        <button onClick={() => {setCompletada(true)} }>Conclua a Tarefa { tarefa }</button>
    </div>
  )
}

export default Task