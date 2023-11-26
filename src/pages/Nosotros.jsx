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

            <div className="nosotros-iconos">
              <ul>
                <li><a href="https://facebook.com"><i className="fa-brands fa-facebook-square fa-3x fb"></i></a></li>
                <li><a href="https://twitter"><i className="fa-brands fa-twitter-square fa-3x"></i></a></li>
                <li><a href="https://instagram.com"><i className="fa-brands fa-instagram-square fa-3x"></i></a></li>
                <li><a href="mailto:max@gmail.com"><i className="fa fa-envelope-square fa-3x"></i></a></li>
              </ul>
            </div>
        </div>

        <div className="col-5">
            <div className="nosotros-imagen">
              <img className="img-fluid" src="/img/nosotros.webp" alt="Foto que nos representa como equipo..." />
            </div>
        </div>

      </div>
  )
}

export default Nosotros