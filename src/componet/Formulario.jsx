
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Formulario({ RegistroExit,CamposVacio }) {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmarPassword, setConfirmarPassword] = useState('');

    const CambioName = (event) => {
        setName(event.target.value);
    }

    const CambioMail = (event) => {
        setMail(event.target.value);
    }

    const CambioPassword = (event) => {
        setPassword(event.target.value);
    }

    const CambioConfirmarPassword = (event) => {
        setConfirmarPassword(event.target.value);
    }

    const CambioSubmit = (event) => {
        var mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!name || !mail || !password || !confirmarPassword) {
            CamposVacio();
        }
        else  if(password != confirmarPassword) {
        alert ("Contraseña no Coinciden")
        }
        else
        if (!mail.match(mailRegex)) {
            alert ("Formato de Correo no Valido")
        }
        else {
            RegistroExit();
        
        }
        event.preventDefault()

    };

    return (
        <form onSubmit={CambioSubmit}>
            <Form.Group className="mb-3">
                <Form.Control 
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Nombre"
                    onChange={CambioName}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="mail"
                    id="mail"
                    value={mail}
                    placeholder="tuemail@ejemplo.com"
                    onChange={CambioMail}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Contraseña"
                    onChange={CambioPassword}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control 
                    type="password"
                    id="confirmarPassword"
                    value={confirmarPassword}
                    placeholder="Confirmar Contraseña"
                    onChange={CambioConfirmarPassword}
                />
            </Form.Group>

            <Button type="submit">Registrarse</Button>
        </form>
    );
}


export default Formulario
