import { useContext, useEffect } from 'react'
import Card from '../components/Card'
import ProductosContext from '../contexts/ProductosContext'

const Inicio = () => {
  const { productos } = useContext(ProductosContext)

  useEffect(() => {
    document.title = 'Libreria - Inicio'
  }, [])

  return (
    <section className="row my-5">
        
        {
          productos && productos.map(producto => (
            <Card key={producto.id} producto={producto} />
          ))
        }

    </section>
  )
}

export default Inicio