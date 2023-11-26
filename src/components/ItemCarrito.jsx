import React, { useContext,useEffect, useState } from 'react'
import { useForm } from '../hooks/userForm'
import CarritoContext from '../contexts/CarritoContext'

const ItemCarrito = ({ itemProducto }) => {

const { cambiarCantidadCarritoContext, eliminarProductoCarritoContext } = useContext(CarritoContext)

let precioCantidadInicial = itemProducto.precio * itemProducto.cantidad 
const [total, setTotal] = useState(precioCantidadInicial)

const [cantidadInput, handleChange ] = useForm({
  cantidad: itemProducto.cantidad
})

useEffect(() => {
  let totalRecalculado = Number(itemProducto.precio * cantidadInput.cantidad).toFixed(2)
  setTotal(totalRecalculado)
  itemProducto.cantidad = cantidadInput.cantidad
  cambiarCantidadCarritoContext(itemProducto)

}, [cantidadInput.cantidad])

  return (
    <div className='row py-3 mb-3'>
         <div className="col-4 mb-1">
                    <div className="bg-image rounded">
                        <img className="w-100" src={`${itemProducto.foto}`} alt={itemProducto.nombre} />
                    </div>
                    </div>
                    <div className="col-6">
                    <p><strong>{itemProducto.nombre}</strong></p>
                    <p>{itemProducto.autor}</p>
                    <p>${itemProducto.precio}</p>
                    <p>{itemProducto.editorial}</p>
                    

                    <button className="btn btn-danger btn-sm me-1 mb-2" onClick={() => eliminarProductoCarritoContext(itemProducto.id)} style={{borderRadius: "50%", width: "30px", height: "30px", padding: "6px 0px"}}
                >
                  <i className="fas fa-trash"></i>
                </button>

                    
                    </div>
                    <div className="col-2">
                    <input
                      type="number"
                      min="1"
                      className="form-control text-center"
                      placeholder="Cantidad"
                      name="cantidad"
                      value={cantidadInput.cantidad}
                      onChange={handleChange} />

                    <p className="text-center mt-4">
                        <strong>${total}</strong>
                    </p>
                </div>
    </div>
  )
}

export default ItemCarrito