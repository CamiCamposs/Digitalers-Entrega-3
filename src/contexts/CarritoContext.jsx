import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext } from "react";
import { post } from "../utils/http";
/* CREANDO CONTEXTO */

// ! 1er -> Creación del contexto
const CarritoContext = createContext()

// ! 2da -> El armado del Provider

const url = import.meta.env.VITE_ENDPOINT_CARRITO

const CarritoProvider = ( { children } ) => {
    // ESTADO
    const [ agregarAlCarrito, eliminarDelCarrito, vaciarCarrito,guardarCarrito,carrito] = useLocalStorage("carrito", [])

    function elProductoEstaEnElCarrito(producto) {
        return carrito.filter(prod => prod.id === producto.id).length // Me devuelve 0 si no hya producto en el carrito y 1 si hay
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id) // Me retorna si hay un producto en el carrito
    }


    const agregarCarritoContext = (producto) => {

        if(!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
            const productoDeCarrito = obtenerProductoDeCarrito(producto)
            console.log(productoDeCarrito)
            productoDeCarrito.cantidad++
            guardarCarrito(carrito)
        }

    }

    const cambiarCantidadCarritoContext = (productoNuevaCantidad) => {
        try {
            const nuevoCarrito = carrito.map(producto => producto.id === productoNuevaCantidad.id ? productoNuevaCantidad : producto)
            guardarCarrito(nuevoCarrito)
        } catch (error) {
            console.log('[cambiarCantidadCarritoContext]: No se pudo guardar el producto con la nueva cantidad', error)
        }
    }

    const eliminarProductoCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const guardarCarritoContext = async () => {
        
        try {
            const carritoGuardado = await post(url, carrito)
            console.log(carritoGuardado)
        } catch (error) {
            console.error('[guardarCarritoContext]: No se pudo guardar el carrito', error)
        }

    }

    const vaciarCarritoContext = () => {
        vaciarCarrito()
    }

    const cantidadArticulosCarritoContext = () => {
        let sumaTotalArticulos = carrito.reduce((total, producto) => {
            return total + producto.cantidad
        }, 0)
        return sumaTotalArticulos
    }

    const precioTotalArticulosCarritoContext = () => {
        let sumaTotal = carrito.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad)
        }, 0)
        return sumaTotal
    }

    const data = { 
        carrito, 
        agregarCarritoContext, 
        eliminarProductoCarritoContext, 
        guardarCarritoContext, 
        vaciarCarritoContext, 
        cantidadArticulosCarritoContext,
        precioTotalArticulosCarritoContext,
        cambiarCantidadCarritoContext
    }

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}


// ! 3era -> Exportaciones
export { CarritoProvider }

export default CarritoContext