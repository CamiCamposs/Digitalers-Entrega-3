import React, { useContext } from 'react'
import ProductosContext from '../contexts/ProductosContext'
import './ProductoEdit.css'

const ProductoEdit = ({editar}) => {
  const {productos, eliminarProductoContext} = useContext(ProductosContext)

 const Row = ({producto}) => {
    return (
      <div className="producto">
        <img src={producto.foto} alt={producto.nombre} />
        <div>
          <p><strong>Nombre:</strong> {producto.nombre}</p>
          <p><strong>Autor:</strong> {producto.autor}</p>
          <p><strong>Precio:</strong> {producto.precio}</p>
          <p><strong>Editorial:</strong> {producto.editorial}</p>
          <button className='btn btn-secondary me-2' onClick={() => editar(producto)}>Modificar</button>
          <button className='btn btn-danger' onClick={() => eliminarProductoContext(producto.id)}>Eliminar</button>
        </div>
      </div>
    )
  }
  
  return (
    <>
      <h2>Productos</h2>
      {
        !productos ? <a /> :
        <table className='table table-striped text-center'>
          
          <tbody>
            {productos.map((producto) => (
              <Row producto={producto} key={producto.id} editar={editar}/>
            ))}
          </tbody>
        </table>
      }
    </>
  )
}

export default ProductoEdit
