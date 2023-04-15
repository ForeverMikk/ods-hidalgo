import React from 'react';

import './Content.css';
import objetivosImg from '../../assets/img/objetivo.png'
import iconoGob from '../../assets/img/icono.png'
import Objetivo from '../Objetivo/Objetivo';
import { objetivos } from '../../variables/objetivos';

const Content = () => {
    return (
        <section className='content'>

            <div className="objetivos">
                <div className="text">
                    <img className='main-img' src={objetivosImg} alt="Objetivos del Programa" />
                    <h2>Crecemos con base en objetuvos</h2>
                    <br />
                    <p>"Objetivos de Desarrollo Sostenible", un conjunto de 17 objetivos interconenctados establecidos por las Naciones Unidas en 2015 como parte de la Agenda 2030 para Desarrollo Sostenible.</p>
                    <p>Los ODS buscan abordar los principales desafíos mundiales, como la pobreza, la desigualdad, el cambio climático y la degradación ambiental, entre otros, y establecer metas claras y medibles para lograr un futuro sotenible para todos.</p>
                    <br />
                    <img className='icon' src={iconoGob} alt="Icono de Hidalgo"/>
                </div>
            </div>

            <div className="second">
                {objetivos.map((objetivo)=> (
                    <Objetivo 
                        className={objetivo.className}
                        title={objetivo.title} 
                        text={objetivo.description} 
                        porpuse={objetivo.subtitle} 
                        data={objetivo.data} 
                        img={objetivo.img}
                        key={objetivo.title} 
                    />
                ))}
            </div>


        </section>
    )
}

export default Content;