import { useState, useEffect } from 'react'
import styles from'./App.module.css'

function App() {


  const [n1, setN1] = useState()
  const [n2, setN2] = useState()
  const [respSoma, setRespSoma] = useState()
  const [respSub, setRespSub] = useState()
  const [respMult, setRespMult] = useState()
  const [respDiv, setRespDiv] = useState()

  const [Error, setError] = useState('')

  useEffect(() =>{
    if(n1 !== undefined && n2 !== undefined && !isNaN(n1) && !isNaN(n2)){
      setRespSoma(parseFloat(n1) + parseFloat(n2) )
      setRespSub(parseFloat(n1) - parseFloat(n2) ) 
      setRespMult(parseFloat(n1) * parseFloat(n2) ) 
      setRespDiv(parseFloat(n1) / parseFloat(n2) ) 


      setError('')

    }else{
      setError('Digite valores numericos para calcular')
    }
    
  }, [n1, n2])

  return (
    <div className={styles.wrapAll}>
     <h1 className={styles.title}>Qualquer coisa</h1>
     <p>Digite valores numericos para calcular</p>
     <div className={styles.wrap}>
      <input type="number" onChange={(e) => setN1(e.Target.value)} value={n1} placeholder='Insira um numero'/>
      <input type="number" onChange={(e) => setN2(e.target.value)} value={n2} placeholder='Insira outro numero'/>
     </div>

     <div className={styles.wrapResps}>
       <h2>Resultado da soma</h2>
       <h3>{RespSoma}</h3>
     </div>

     <div className={styles.wrapResps}>
       <h2>Resultado da substracao</h2>
       <h3>{respSub}</h3>
     </div>

     <div className={styles.wrapResps}>
       <h2>Resultado da multiplicacao</h2>
       <h3>{respMult}</h3>
     </div>

     <div className={styles.wrapResps}>
       <h2>Resultado da divisao</h2>
       <h3>{respDiv}</h3>
     </div>
    </div>
  )
}

export default App
