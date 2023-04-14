import React from 'react';
import { Button } from "react-bootstrap";
import sLogo from "../../assets/s_logo.png";
import bars from "../../assets/bars.png";
import logoHidalgo from "../../assets/hidalgo.png";
import logoODS from "../../assets/ods.png";

export const CollageSuccess = () => {
  return (
    <>
      <div className="main-container-w">
        <div className="logos-top mb-5">
          <img src={logoHidalgo} />
          <img src={logoODS} />
        </div>
        <div className="form-container-wine">
          <h1 className="mb-5 text-white">¡El collage fue creado!</h1>

          <Button variant="primary" className="custom-btn" size="lg">
            Ver Resultado &nbsp;
            <img src={sLogo} />
          </Button>
        </div>
        <div className="row my-5">
          <img src={bars} />
        </div>
      </div>
    </>
  )
}
