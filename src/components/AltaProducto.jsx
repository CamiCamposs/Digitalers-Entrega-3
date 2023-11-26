import React, { useContext, useState, useEffect } from 'react'
import ProductosContext from '../contexts/ProductosContext'

const initialState = {
  id: null,
  nombre: "",
  autor: "",
  precio: "",
  editorial: ""
};

const AltaProducto = ({nuevo, editar}) => {
  const {crearProductoContext, actualizarProductoContext} = useContext(ProductosContext)
  const [form, setForm] = useState(nuevo || initialState)

  useEffect(() => {
    setForm(nuevo || initialState);
  }, [nuevo]);

  const handleForm = (e) => {
    if (e.target.name) {
      setForm({
        ...form,
        [e.target.name] : e.target.value
      })
    } else {
      e.preventDefault()
      form.id === null ? crearProductoContext(form) : actualizarProductoContext(form)
    }
  }

  const limpiar = () => {
    setForm(initialState)
    editar(null)
  }

  return (
    <form onSubmit={handleForm} className="m-3">
  <h2 className="mb-3">Agregar Libro</h2>
  
  <div className="mb-3">
    <label htmlFor="nombre" className="form-label">Nombre Libro</label>
    <input className="form-control" id="nombre" name="nombre" type="text" onChange={handleForm} value={form.nombre}/>
  </div>

  <div className="mb-3">
    <label htmlFor="autor" className="form-label">Autor</label>
    <input className="form-control" id="autor" name="autor" type="text"  onChange={handleForm} value={form.autor}/>
  </div>

  <div className="mb-3">
    <label htmlFor="precio" className="form-label">Precio</label>
    <input className="form-control" id="precio" name="precio" type="text"  onChange={handleForm} value={form.precio}/>
  </div>

  <div className="mb-3">
    <label htmlFor="editorial" className="form-label">Editorial</label>
    <input className="form-control" id="editorial" name="editorial" type="text"  onChange={handleForm} value={form.editorial}/>
  </div>

  <div className="mb-3">
    <label htmlFor="foto" className="form-label">Foto</label>
    <input className="form-control" id="foto" name="foto" type="file" onChange={handleForm} />
  </div>

  <div className="d-flex justify-content-between">
    <button type="submit" className="btn btn-primary">
      Enviar
    </button>
    <button type="reset" className="btn btn-secondary" onClick={limpiar}>
      Limpiar
    </button>
  </div>
</form>

  )
}

export default AltaProducto
