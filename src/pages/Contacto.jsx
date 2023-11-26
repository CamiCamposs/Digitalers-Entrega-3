import { useEffect } from 'react'

const Contacto = () => {

  useEffect(() => {
    document.title = 'Libreria - Contacto'
  }, [])

  return (
    <div>Contacto</div>
  )
}

export default Contacto
