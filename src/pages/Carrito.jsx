import { useContext } from 'react'
import './Carrito.css'
import CarritoContext from '../contexts/CarritoContext'
import ItemCarrito from '../components/ItemCarrito'

const Carrito = () => {
  const { 
    carrito, 
    cantidadArticulosCarritoContext, 
    precioTotalArticulosCarritoContext,
    guardarCarritoContext
  } = useContext(CarritoContext)
  return (
    <section className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-8">
            <div className="card mb-4">
              <div className="card-header py-4">
              <h5 className="mb-0">Carrito - {cantidadArticulosCarritoContext()} artículos</h5>
              </div>

              <div className="card-body" id="lista-compra">     
              {
                    carrito && carrito.map(item => (
                      <ItemCarrito key={item.id} itemProducto={item} />
                    ))
                  }
              </div>

            </div>
          
          </div>
          <div className="col-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Resumen carrito</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Productos
                    <span id="sub-total"></span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Envío
                    <span>Gratis</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    <div>
                      <strong>IVA</strong>
                    </div>
                    <p><strong id="iva"></strong></p>
                  </li>
                  
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    <div>
                      <strong>Total de la compra</strong>
                    </div>
                    <span><strong id="total"></strong></span>
                    <p><strong>${precioTotalArticulosCarritoContext().toFixed(2)}</strong></p>
                  </li>
                </ul>
                <button type="button" className="btn btn-outline-success btn-rounded" data-mdb-ripple-color="Gray">Pagar</button>

              </div>

            </div>

            <div className="card">
              <div className="card-body tarjetas">
                <p><strong>Métodos de pago </strong></p>
                <p>Tarjetas de credito</p>
                <img src="../img/tarjetas/amex.svg" alt="American Express" className="me-2"/>
                <img src="../img/tarjetas/master.svg" alt="Mastercard" className="me-2"/>
                <img src="../img/tarjetas/visa.svg" alt="Visa" className="me-2"/>

                <p>Tarjetas de debito</p>
                <img src="../img/tarjetas/master.svg" alt="Mastercard" className="me-2"/>
                <img src="../img/tarjetas/visa.svg" alt="Visa" className="me-2"/>

                <p>Efectivo</p>
                <img src="../img/pagofacil.png" alt="PagoFacil" className="me-2"/>
                <img src="../img/rapipago.png" alt="PagoFacil" className="me-2"/>

              </div>
            </div>
          </div>
          </div>
      </section>
  );
};

export default Carrito ;