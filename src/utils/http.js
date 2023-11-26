// ! CRUD -> R:READ => GET 
export const get = async (url) => {
    try {
        const respuesta = await fetch(url) 
        console.log(respuesta)
        if (!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`)
        }
        const data = await respuesta.json() 
        return data

    } catch (error) {
        console.log(`ERROR GET -> `, error)
    }
}

// ! CRUD -> C:CREATE => POST
export const post = async (url, data) => {

    const fetchConfig = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    try {
        const respuesta = await fetch(url, fetchConfig) 
        if(!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`)
        }

        const datos = await respuesta.json() 

        return datos

    } catch (error) {
        console.log(`ERROR POST -> `, error)
    }
}

// ! CRUD -> U:UPDATE => PUT
export const put = async (url, data) => {
    const fetchConfig = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    }

    try {
        const respuesta = await fetch(url, fetchConfig) 
        if(!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`)
        }

        const datos = await respuesta.json() 

        return datos

    } catch (error) {
        console.log(`ERROR PUT -> `, error)
    }
}


// ! CRUD -> D:DELETE => DELETE
export const remove = async (url) => {
    const fetchConfig = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    }

    try {
        const respuesta = await fetch(url, fetchConfig) 
        if(!respuesta.ok) {
            throw new Error(`Error: ${respuesta.status} ${respuesta.statusText}`)
        }

        const datos = await respuesta.json() 

        return datos

    } catch (error) {
        console.log(`ERROR DELETE -> `, error)
    }
}
