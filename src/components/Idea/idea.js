import React from "react";
import { Button } from "react-bootstrap";
import sLogo from "../../assets/s_logo.png";
import bars from "../../assets/bars.png";
import logoHidalgo from "../../assets/hidalgo.png";
import logoODS from "../../assets/ods.png";
// import React, { useState } from 'react';

export const Idea = () => {
  // const [inputValue, setInputValue] = useState('');

  // const handleInputChange = (event) => {
  // setInputValue(event.target.value);
  //  };
  return (
    <>
      <div className="main-container-w">
        <div className="logos-top mb-5">
          <img src={logoHidalgo} />
          <img src={logoODS} />
        </div>
        <div className="form-container-g">
          {/* <img src={logoHidalgo} className='main-logo' alt="Logo Gobierno de Hidalgo" /> */}
          <h3 className="mb-5 text-wine">¡Aporta a tu comunidad!</h3>
          {/* <p className='text-start'>Escibe una palabra que represente tu Hidalgo ideal.:</p> */}
          <div className="row my-4">
            {/* <input type="text" value={inputValue} onChange={handleInputChange} /> */}
            <label className="text-start" for="campo1">
              Escibe una palabra que represente tu Hidalgo ideal:
            </label>
            <input
              className="my-form"
              type="text"
              placeholder="Escribe tu idea"
              name="campo1"
            />
            <label className="text-start" for="campo2">
              Sube una imagen que represente a Hidalgo:
            </label>
            <input
              className="my-form"
              type="file"
              placeholder="Sube una foto"
              name="campo2"
            />
          </div>
          <Button variant="primary" className="custom-btn" size="lg">
            Siguiente &nbsp;
            <img src={sLogo} />
          </Button>
        </div>
        <div className="row my-5">
          <img src={bars} />
        </div>
      </div>
    </>
  );
};
