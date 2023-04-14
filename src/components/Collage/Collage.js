import React from 'react';
import { Button } from "react-bootstrap";
import sLogo from "../../assets/s_logo.png";
import bars from "../../assets/bars.png";
import logoHidalgo from "../../assets/hidalgo.png";
import logoODS from "../../assets/ods.png";
import collageWeb from "../../assets/Collage_web.png";
export const Collage = () => {
  return (
    <>
      <div className="main-container-w">
        <div className="logos-top mb-5">
          <img src={logoHidalgo} />
          <img src={logoODS} />
        </div>
        <div className="form-container-g">
            <div className='row'>
                <img src={collageWeb} />
            </div>
          
          <div className='text-end mt-3'>
            <Button variant="primary" className="custom-btn" size="lg">
                Continuar &nbsp;
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
