import React from 'react'
import '../styles/GestionarPais.css'

export default function GestionarPais() {
  return (
    <div className='gestionar-pais'>
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

        <div className='box-3'>
          <label>Capital: </label>
          <input type='text' placeholder='capital' />

          <label>Moneda: </label>
          <input type='text' placeholder='Moneda' />
        </div>
      </div>
      <div className='buttons'>
      <button className='btn-eliminar'>Eliminar</button>
      <button className='btn-actualizar'>Actualizar</button>
      </div>
    </form>
  </div>
  )
}
