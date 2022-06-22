import './style.css'

/**
 * além de "props", também podemos passar as propriedades de forma desestruturadas, Ex.:
 * export function Card({name, time}){...}
 * nesse casodevemos acessa-las sem o props
 * as propriedades devem ser acessadas dentro de chaves, Ex.: {name} ou {props.name}
 */

export function Card(props) {
  return (
    <div className='card'>
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}