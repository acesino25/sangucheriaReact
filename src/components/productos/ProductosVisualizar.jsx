import React from 'react'
import ProductoIndividual from './ProductoIndividual'

const ProductosVisualizar = () => {

    const productos = [
        {
            nombre: "Miga J+Q",
            costo: 700,
            precio: 1500,
            sugerido: 1500,
            ganancia: 800,
        },
        {
            nombre: "Pebete J+Q",
            costo: 1500,
            precio: 1500,
            sugerido: 1700,
            ganancia: 0,
        }
    ]

  return (
    <div style={{display: "flex", flexDirection:"column", gap: "1em"}}>
        {
            productos.map((item,index)=>(<ProductoIndividual producto={item} key={index}></ProductoIndividual>))
        }
    </div>
  )
}

export default ProductosVisualizar