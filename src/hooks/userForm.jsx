import { useState } from "react"
// Un hook tiene el nombre que comenzar con use... Ej: useLocalStorage, useForm
// Tengo crear un función que tenga el mismo nombre del archivo
// Tiene que usar aunque sea un hook de los de react (useState, useEffect, useContext)
// Exportar la función para poder utilizarla en cualquier componente

export const useForm = ( estadoInicial = {} ) => {
    
    const [values, setValues] = useState(estadoInicial)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setValues({
            ...values,
            [name]: value
        })
    }

    return [ values, handleInputChange ]

}
