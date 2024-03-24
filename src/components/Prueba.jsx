import { useEffect, useState } from 'react'

export default function Prueba() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
        .then(response => response.json())
        .then(data => setProduct(data.products));
    }, [])

    

  return (
    <>
        {product.length === 0? <h1>Cargando...</h1> : "" }
        {product.map(p => <h1 key={p.id}>{p.name}</h1>)}
    </>
  )
}
