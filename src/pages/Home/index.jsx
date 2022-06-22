/**
 * Todo retorno de uma função deve retornar apenas um elemento
 * Devemos então embrulhar todos os outros elementos filhos com <></> (fragment)
 * Quando queremos que as alterações feitas no documento reflita na página devemos utilizar
 * o conceiro de "estado"
 * Devemos importar ele da biblioteca do React {useState}
 * Depois atribuir para uma const [nomeDaVariavel, setNomeDavariavel] = useState()
 */

import { useState } from 'react'

import './styles.css'

import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState("")

  return (    
    <div className='container'>
      <h1>Nome: {studentName}</h1>

      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={e => setStudentName(e.target.value)}
      />

      <button type="button">Adicionar</button>

      <Card name="Stefano" time="12:30:04" /> 
      <Card name="Tatiana" time="12:32:37" /> 
      <Card name="Raul" time="12:40:35" /> 
    </div>
  )
}