import './Nosotros.css'
import { useEffect } from 'react'

const Nosotros = () => {

  useEffect(() => {
    document.title = 'Libreria - Nosotros'
  }, [])

  return (
    <div className="row">

        <div className="col-7">
            <h1 className="titulo-destacado">Sobre <span>nosotros</span></h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci alias quas vitae corporis ut quos deleniti maiores modi autem porro!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam consectetur veritatis quidem, minus ducimus eum?</p>
        </div>

        <div className="col-5">
            <div className="nosotros-imagen">
              
            </div>
        </div>

      </div>
  )
}

export default Nosotros