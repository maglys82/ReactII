import React from 'react';
import Alert from "./Alert"
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"



function Registro({ RegistroExit,CamposVacio }) {

    return (
        <div>
            <h1>Crea una Cuenta</h1>
            <SocialButton icon="facebook" />
            <SocialButton icon="github" />
            <SocialButton icon="instagram" />
            <h4>O usa tu mail para registrate</h4>
            <Formulario
             RegistroExit={RegistroExit}
             CamposVacio={CamposVacio}
             />
        </div>
    );
}

export default Registro

