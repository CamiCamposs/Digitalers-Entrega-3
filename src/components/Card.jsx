import { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import './Card.css'

const Card = ( { producto } ) => {
    const { agregarCarritoContext } = useContext(CarritoContext)

    const handleComprar = (producto) => {
      console.log('Comprando -> ', producto)
      agregarCarritoContext(producto)
    }
  
    return (
      <div className="card col-3 m-3 shadow-sm">
        <img src={producto.foto} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title ">{producto.nombre}</h5>
          <ul className="list-unstyled mt-3 mb-4">
              <li className="list-group-item autor">{producto.autor}</li>
              <li className="list-group-item precio">{producto.precio}</li>
              <li className="list-group-item editorial">{producto.editorial}</li>
          </ul>
          <button className="btn btn-primary agregar-carrito" onClick={() => handleComprar(producto)}>
            Comprar
          </button>
        </div>
      </div>
      
    );
};
  
export default Card;
