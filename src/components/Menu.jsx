import React from 'react'
import log from '../../src/assets/images/logo.png'

const Menu = () => {

    const style = {
        logo:{
          width: "2em",
          height: "2em",
        }
      }
  return (
    <div>
        <img src={log} style={style.logo} alt="" />
        <ul>
            <li>VER PRODUCTOS</li>
            <li>AGREGAR INGREDIENTE</li>
            <li>CREAR PRODUCTO</li>
        </ul>
    </div>
  )
}

export default Menu