import React from "react";

export function Testimonio(obj) {
    return (
        <div className='contenedor-testimonio'>
            <img
                className='imagen-testimonio'
                src={require(`../pictures/testimonio-${obj.imagen}.png`)}
                alt={`fotografia de ${obj.nombre}` }/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>
                    <strong>{obj.nombre}</strong> en {obj.pais}
                </p>
                <p className='cargo-testimonio'>
                    {obj.cargo} en <strong>{obj.empresa}</strong>
                </p>
                <p className='texto-testimonio'>
                    "{obj.testimonio}"
                </p>
            </div>
        </div>
    )
}