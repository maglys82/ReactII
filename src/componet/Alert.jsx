import React from "react";

function Alert(props) {
    const { mensaje, color } = props;
    const alertClassName = `alert ${color}`;

    return (
      <div className={`alert alert-${color}`}>
        {mensaje}
      </div>
    );
  }
    
  export default Alert
