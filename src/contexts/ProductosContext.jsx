import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { get, post, put, remove } from "../utils/http"


const ProductosContext = createContext()

const url = import.meta.env.VITE_ENDPOINT_PRODUCTOS
console.log(url)

const ProductosProvider = ( { children } ) => {
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        obtenerProductos()
    }, []) 
    

    const obtenerProductos = async () => {
        try {
            const productsBack = await get(url)
            setProductos(productsBack)
        } catch (error) {
            console.log(`[obtenerProductos] -> Error -> ${error}`)
        }
    }


    const crearProductoContext = async (productoNuevo) => {
        try {
            const nuevoProducto = await post(url, productoNuevo);
            let nuevosProductos = [...productos, nuevoProducto];
            setProductos(nuevosProductos);
            localStorage.setItem("Productos", JSON.stringify(nuevosProductos));
        } catch (error) {
            console.error("Error", error);
        }
    }

    const actualizarProductoContext = async (productoEditado) => {
        console.log(productoEditado)
    
        const urlCompleta = url.endsWith('/') ? url + productoEditado.id : `${url}/${productoEditado.id}`;
        console.log(urlCompleta)
        try {
            const data = await put(urlCompleta, productoEditado)
            console.log(data)
    
            const nuevaDB = productos.map(producto => producto.id === productoEditado.id ? productoEditado : producto)
            setProductos(nuevaDB)
    
            localStorage.setItem("productos", JSON.stringify(nuevaDB));
        } catch (error) {
            console.log("Error al actualizar", error)
        }
    };


    const eliminarProductoContext = async (id) => {
        const urlCompleta = url.endsWith('/') ? url + id : `${url}/${id}`;
        console.log(urlCompleta)
        try {
            const data = await remove(urlCompleta)
            console.log(data)
    
            const nuevaDB = productos.filter(producto => producto.id !== id)
            setProductos(nuevaDB)
    
            localStorage.setItem("productos", JSON.stringify(nuevaDB));
        } catch (error) {
            console.log("Error al eliminar", error)
        }
    };


    const data = { productos, crearProductoContext, actualizarProductoContext, eliminarProductoContext }

    return <ProductosContext.Provider value={data}>{children}</ProductosContext.Provider>
}


export { ProductosProvider }

export default ProductosContext