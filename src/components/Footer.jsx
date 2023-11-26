import React from 'react'
import './Footer.css'
const Footer = () => {
    return(
        
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Seguinos en nuestras redes</span>
        </div>
        <div className="redes">
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

      </section>
      <section className="nosotros">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i> Sobre nosotros
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloribus quas excepturi tempora quo, animi officia unde commodi eaque officiis, accusantium perspiciatis distinctio, voluptatum iste ipsam sit voluptatem impedit! Ullam.
              </p>
            </div>

           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p><i className="fas fa-home me-3"></i> Cordoba, Argentina</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                libros@gmail.com
              </p>
              <p><i className="fas fa-phone me-3"></i> +54 9 351999999</p>

            </div>
          </div> {/* Este es el cierre del div que faltaba */}
        </div>
      </section>

      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2023 Copyright
      </div>
    </footer>
    )
}

export default Footer
