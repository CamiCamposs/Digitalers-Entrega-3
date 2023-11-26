import { useContext } from 'react'
import './ItemCarritoInicio.css'
import CarritoContext from '../contexts/CarritoContext'

const ItemCarritoInicio = ({item}) => {
  const { eliminarProductoCarritoContext } = useContext(CarritoContext)

  const handleEliminar = (id) => {
    console.log('Estoy eliminando -> ', id)
    eliminarProductoCarritoContext(id)
  }

  return (
    <tr>
        <td>
            <img src={`${item.foto}`} alt={item.nombre} width="100" />
        </td>
        <td>{item.nombre}</td>
        <td>{item.precio}</td>
        <td>
            <button className="fas fa-times-circle btn-borrar" onClick={() => handleEliminar(item.id)}></button>
        </td>
    </tr>
  )
}

export default ItemCarritoInicio