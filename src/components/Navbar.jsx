import { Link, NavLink, useNavigate } from "react-router-dom"
import ItemCarritoInicio from "./ItemCarritoInicio"
import { useContext } from "react"
import CarritoContext from "../contexts/CarritoContext"

const Navbar = () => {
  const { carrito, vaciarCarritoContext } = useContext(CarritoContext)

  const navigate = useNavigate()

  const handleComprar = () => {
    
    if ( carrito.length !== 0 ) {
      navigate('/carrito')
    } else {
      console.log('No hay productos')
    }
  }

  const handleVaciarCarrito = () => {
    vaciarCarritoContext()
  }
  
  return (
    <div>
    <header>
      <nav  className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <form className="d-flex w-25">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            </form>
              
            <div className="d-flex justify-content-center align-items-center">
               <NavLink className="nav-link" to="/"><img src="img/Logo.png" alt="" width="50px"/></NavLink>
            </div>

            <div className="d-flex">
              <div className="dropdown dropstart">
                <a type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-cart-shopping"></i>
                </a>
                <ul id="carrito" className="dropdown-menu mx-2">
                  <table id="lista-carrito" className="table">
                    <thead>
                      <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        carrito && carrito.map(item => (
                          <ItemCarritoInicio key={item.id} item={item} />
                        ))
                      }
                    </tbody>
                  </table>
                  <div className="d-grid gap-2 d-md-block justify-content-md-center ms-1">
                  <button id="vaciar-carrito" className="btn btn-primary" onClick={handleVaciarCarrito}>Vaciar Carrito</button>
                    <button id="procesar-pedido" className="btn btn-danger" onClick={handleComprar} disabled={carrito.length === 0 }>Procesar Compra</button>
                  </div>
                </ul>
              </div>
            </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">CATEGORIAS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Ficcion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Literatura</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Infantiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Juveniles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Desarrollo personal</a>
              </li>
              <li className="nav-item">
              <NavLink className="nav-link" to="/alta">Alta</NavLink>
              </li>
          
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
  )
}

export default Navbar;