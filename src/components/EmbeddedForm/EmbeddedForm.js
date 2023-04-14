import React, { useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import sLogo from "../../assets/s_logo.png";
import bars from "../../assets/bars.png";
import logoHidalgo from "../../assets/hidalgo.png";
import logoHidalgoW from "../../assets/hidalgo_w.png";
import logoODSW from "../../assets/ods_l.png";

export const EmbeddedForm = () => {
  const hubspotFormRef = useRef(null);

//   useEffect(() => {
//     window.hbspt.forms.create({
//       portalId: "39498369",
//       formId: "6e9ca6d0-0156-45ec-b43a-821cb6b62db4",
//       target: "#myHubspotForm",
//     });
//   }, []);

  return (
    <>
      <div className="main-container">
        <div className="logos-top mb-5">
          <img src={logoHidalgoW} />
          <img src={logoODSW} />
        </div>
        <div className="form-container">
            {/* <div id="myHubspotForm" ref={hubspotFormRef}></div> */}
        </div>
        <div className="text-end mt-3">
          <Button variant="primary" className="custom-btn" size="lg">
            Continuar &nbsp;
            <img src={sLogo} />
          </Button>
        </div>
      </div>
    </>
  );
};
