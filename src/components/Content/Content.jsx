import React from 'react';

import './Content.css';
import objetivos from '../../assets/img/Recurso 8.png'
import iconoGob from '../../assets/img/Recurso 10.png'
const Content = () => {
    return (
        <section className='content'>

            <div className="objetivos">
                <div className="text">
                <img src={objetivos} alt="Objetivos del Programa" />
                    <h2>Crecemos con base en objetuvos</h2>
                    <br />
                    <p>"Objetivos de Desarrollo Sostenible", un conjunto de 17 objetivos interconenctados establecidos por las Naciones Unidas en 2015 como parte de la Agenda 2030 para Desarrollo Sostenible.</p>
                    <p>Los ODS buscan abordar los principales desafíos mundiales, como la pobreza, la desigualdad, el cambio climático y la degradación ambiental, entre otros, y establecer metas claras y medibles para lograr un futuro sotenible para todos.</p>
                    <br />
                    <img src={iconoGob} alt="Icono de Hidalgo"/>
                </div>
            </div>


        </section>
    )
}

export default Content;