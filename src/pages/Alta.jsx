import { useState, useEffect } from 'react'
import AltaProducto from '../components/AltaProducto';
import ProductoEdit from '../components/ProductoEdit';


const Alta = () => {
  const [nuevo, editar] = useState(null)

  useEffect(() => {
    document.title = 'Alta (Carga de productos)';
  }, []);

  return (
    <>
      <AltaProducto nuevo={nuevo} editar={editar} />
      <ProductoEdit editar={editar} />
    </>
  );
};

export default Alta
