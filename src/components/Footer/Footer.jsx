import React from 'react';

import './Footer.css';
import logoWhite from '../../assets/img/logo-blanco.png';
import twitter from '../../assets/img/twitter.png';
import google from '../../assets/img/google.png';
import linkedin from '../../assets/img/linkedin.png';
import facebook from '../../assets/img/facebook.png';

const Footer = () => {
    return(
        <footer>
            <div className="main">
                <div className="logo">
                    <img src={logoWhite} alt="Logo de Hidalgo" />
                </div>
                <div className="phone">
                    <Phone name="Emergencia" number="911" />
                    <Phone name="Denuncia Anonima" number="089" />
                    <Phone name="Atencion Ciudadana" number="070" />
                    <Phone name="Barandilla" number="71 73242" />
                    <Phone name="Ministerio" number="71 79063" />
                </div>
                <div className="contact">
                    <p>Aviso de Privasidad</p>
                    <p>Tratamiento de datos personales</p>
                    <p>Contacto</p>
                    <p className="adress">Plaza Juarez s/n Col. Centro <br /> Pachuca de Soto, Hidalgo, Mexico</p>

                </div>
            </div>

            <div className="secondary">
                <p className="copyright">
                    Cpyrigth @ 2022 Todos los derechos reservados por Hidalgo de la Transformacion                    
                </p>

                <div className="social">
                    <ul>
                        <li><img src={facebook} alt="Icono de facebook" /></li>
                        <li><img src={twitter} alt="Icono de twitter" /></li>
                        <li><img src={linkedin} alt="Icono de linkedin" /></li>
                        <li><img src={google} alt="Icono de google" /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


const Phone = ({number, name}) => {
    return (
        <div className="single-phone">
            <p className="number">{number}</p>
            <p className='name'>{name}</p>
        </div>
    )
}



export default Footer;