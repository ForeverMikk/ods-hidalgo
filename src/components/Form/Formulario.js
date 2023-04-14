import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import sLogo from "../../assets/s_logo.png";
import bars from "../../assets/bars.png";
import logoHidalgo from "../../assets/hidalgo.png";
import logoHidalgoW from "../../assets/hidalgo_w.png";
import logoODSW from "../../assets/ods_l.png";

export const Formulario = () => {
  return (
    <>
      <div className="main-container">
        <div className="logos-top mb-5">
          <img src={logoHidalgoW} />
          <img src={logoODSW} />
        </div>
        <div className="form-container">
          <img
            src={logoHidalgo}
            className="main-logo"
            alt="Logo Gobierno de Hidalgo"
          />

          <div className="row my-5">
            <img src={bars} />
          </div>
          <h3>
            Queremos saber tu opinión acerca de la comunidad y sus necesidades
          </h3>
          <p>
            Ayúdanos llenando esta pequeña encuesta, los grandes cambios llegan
            con un primer paso
          </p>
          <p>¡Se parte de esto!</p>
          <Button variant="primary" className="custom-btn" size="lg">
            INICIAR &nbsp;
            <img src={sLogo} />
          </Button>
        </div>
      </div>
    </>
  );
};
