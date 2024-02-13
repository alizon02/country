import React from 'react'
import "../styles/CrearPais.css"
export default function CrearPais() {
  return (
    <div className='Crear-pais'>
      <form className='form'>
        <div className='input-code'>
          <label>Codigo Pais</label>
          <input type="text" placeholder='codigo pais' />

          <button className="consult-btn">Consultar</button>
        </div>
        <div className='fields'>

          <div className='box-1'>
          <label>Codigo</label>
          <input type="text" placeholder='codigo' />

          <label>Nombre: </label>
          <input type="text" placeholder='nombre pais' />
          </div>

          <div className='box-2'>
            <label>Languaje: </label>
            <input type="text" placeholder='lenguage' />

            <label>Contienente: </label>
            <input type="text" placeholder='continente' />
          </div>
        </div>
        <div className='buttons'>
      <button className='btn-eliminar'>Eliminar</button>
      <button className='btn-crear'>Crear</button>
      </div>
      </form>
    </div>
  )
}
