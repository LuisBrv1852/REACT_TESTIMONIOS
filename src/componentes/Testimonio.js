import React from 'react';
import '../styleSheets/Testimonio.css';

export function Testimonio (props){
  return(
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/${props.imagen}.png`)} 
        alt='foto de emma'></img>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong> en <strong>{props.pais}</strong></p>
          <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
          <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
    </div>
  );
}

/*export default Testimonio;*/