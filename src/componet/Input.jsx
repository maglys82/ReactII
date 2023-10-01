import React, { useState } from 'react';

function Input() {
    const [nombre, setNombre] = useState('');
    const manejarCambioInput = (event) => {
        setNombre(event.target.value);
}
    const[ color,setColor] = useState('');
    const manejarCambioColor = (event) => {
        setColor(event.target.value);
    };
    return (
        <>

            <div style={{backgroundColor: color}}>
            
                <h1>Mi Componente con Estado de Nombre</h1>
                <h2>Mi nombre es {nombre}</h2>


                <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={manejarCambioInput}
                />
                <input type="text" 
                placeholder="Ingrese color"
                style={{backgroundColor: color}}
                value={color}
                onChange={manejarCambioColor}
                />


                <p>Tu nombre es: {nombre}</p>
            </div>

        </>
    )
}

export default Input
