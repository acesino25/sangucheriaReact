import { Routes, Route } from "react-router-dom"
import './App.css'
import ProductosVisualizar from "./components/productos/ProductosVisualizar"
import IngredientesCarga from "./components/productos/IngredientesCarga"
import Menu from "./components/Menu"


function App() {

  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={ <ProductosVisualizar /> } />
        <Route path="cargarIngrediente" element={ <IngredientesCarga /> } />
        <Route path="login" element={ <login /> } />
      </Routes>
    </>
  )
}

export default App
