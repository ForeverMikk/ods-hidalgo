import React from 'react';
import { Button } from 'react-bootstrap';
import sLogo from '../../assets/s_logo.png';
import bars from '../../assets/bars.png';
import logoHidalgo from '../../assets/hidalgo.png';

export const Form = () => {
  return (
    <>
    <div className='main-container'>
      <div className='form-container'>

        <img src={logoHidalgo} className='main-logo' alt="Logo Gobierno de Hidalgo" />
        
        <div className='row my-5'>
        <img src={bars} />
        </div>
        <h3>Queremos saber tu opinión acerca de la comunidad y sus necesidades</h3>
        <p>Ayúdanos llenando esta pequeña encuesta, los grandes cambios llegan con un primer paso</p>
        <p>¡Se parte de esto!</p>
      <Button variant='primary' className='custom-btn' size='lg'>
        INICIAR &nbsp;
        <img src={sLogo} />
        </Button>
      </div>
    </div>
    </>
  )
}
