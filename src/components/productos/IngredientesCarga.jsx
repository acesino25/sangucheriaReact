import React from 'react'

const IngredientesCarga = () => {
  const style = {
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "40vw",
    },
    label: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%",
      alignItems: "center",
    },
    input:{
      height: "2em"
    }
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
  }

  return (
    <div>
      <form action="" onSubmit={()=>handleSubmit(event) } style={style.form} id='formIngrediente'>
        <label htmlFor="ingrediente" style={style.label}><p>Ingrediente</p>
        <input type="text" placeholder='Tomate' style={style.input}/>
        </label>

        <label htmlFor="unidad" style={style.label}><p>Unidad</p>
        <input type="text" placeholder='Kg' style={style.input}/>
        </label>

        <label htmlFor="precio" style={style.label}><p>Precio</p>
        <input type="number" placeholder='1000' style={style.input}/>
        </label>

        <button type='submit' form='formIngrediente'>Cargar</button>
      </form>
    </div>
  )
}

export default IngredientesCarga