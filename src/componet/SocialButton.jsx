import React from 'react';


function SocialButton(props) {
    return (
        <button className="social-button">
          <i className={`fa fa-${props.icon} networks-icon`}></i>
        </button>
      );
    }
  
  export default SocialButton
  