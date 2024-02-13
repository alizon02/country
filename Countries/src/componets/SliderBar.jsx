import React from 'react'
import {Link} from "react-router-dom"
import "../styles/SliderBar.css"
export default function SliderBar() {
  return (
    <div className='SliderBar'>

      <h1>logo</h1>
      <Link to="/">Home</Link>
      <Link to="/crear">Crear Pais</Link>
      <Link to="/gestionar">Gestionar pais</Link>

    </div>
  )
}
