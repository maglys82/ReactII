import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Registro from './componet/Registro'
import Formulario from './componet/Formulario'
import Alert from './componet/Alert'

function App() {
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');

  const RegistroExitoso = () => {
    setMensaje("¡Registro exitoso!");
    setColor("success");
  };


  const CamposVacios = () => {
    setMensaje("Por favor, completa todos los campos.");
    setColor("danger");
  };

  return (
    <div>
      <Registro
        RegistroExit={RegistroExitoso}
        CamposVacio={CamposVacios}
      />
      <Alert mensaje={mensaje} color={color} />
    </div>
  );
}
export default App
