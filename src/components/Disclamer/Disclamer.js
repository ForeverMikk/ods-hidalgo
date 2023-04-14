import React from 'react';
import { Button } from "react-bootstrap";
import sLogo from "../../assets/s_logo.png";
import bars from "../../assets/bars.png";
import logoHidalgo from "../../assets/hidalgo.png";
import logoODS from "../../assets/ods.png";

export const Disclamer = () => {
  return (
    <>
      <div className="main-container-w">
        <div className="logos-top mb-5">
          <img src={logoHidalgo} />
          <img src={logoODS} />
        </div>
        <div className="form-container-g">
          <h3 className="mb-5 text-wine">¡Términos y condiciones!</h3>
          <div className="row my-4">
            
            
            <p className='text-justify'>
                La utilización de este sitio y de cualquera de las aplicaciones del mismo constituye el pleno y expreso consentimiento por parte del usuario para observar y sujetarse respecto de cada uno de los términos y condiciones que aquí se contienen, así como respecto de la políticas de privacidas, políticas de seguridad y, en su caso, cualquiera de los términos a los que habrá de sujetarse el usuario cuando acceda a este sitio sean contrarios a sus intereses, deberá abstenerse de hacer uso de este.
            </p>
            <p>
                La utilización de este sitio y de cualquera de las aplicaciones del mismo constituye el pleno y expreso consentimiento por parte del usuario para observar y sujetarse respecto de cada uno de los términos y condiciones que aquí se contienen, así como respecto de la políticas de privacidas, políticas de seguridad y, en su caso, cualquiera de los términos a los que habrá de sujetarse el usuario cuando acceda a este sitio sean contrarios a sus intereses, deberá abstenerse de hacer uso de este.
            </p>

            <input className="my-form" type="radio" name="campo2"/>
            <label className="text-start" for="campo2">
              He leído los términos y condiciones
            </label>

            
          </div>
          <div className='text-end'>
            <Button variant="primary" className="custom-btn" size="lg" disabled>
                Siguiente &nbsp;
                <img src={sLogo} />
            </Button>
            <Button variant="primary" className="custom-btn" size="lg">
                Aceptar &nbsp;
                <img src={sLogo} />
            </Button>
          </div>
          
        </div>
        <div className="row my-5">
          <img src={bars} />
        </div>
      </div>
    </>
  )
}
