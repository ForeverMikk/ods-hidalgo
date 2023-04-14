import React from 'react';

import './Objetivo.css';

const Objetivo = ({title, text, porpuse, data, img, className}) => {
    return (
        <div className={`objetivo ${className}`}>
            <div className="img">
                <img src={img} alt="Imagen de Sencibilizacion" />/
            </div>

            <div className="content">
                <h2 className="title">{title}</h2>
                <p>{text}</p>
                <p className="proposito">{porpuse}</p>

                {data.map((item, index) => (
                    <Caracteristicas caracteristicas={item.aspects} title={item.title} key={item.title}/>
                ))}
            </div>
        </div>
    )
}

const Caracteristicas = ({title, caracteristicas}) => {
    return (
        <div className="caracteristicas">
            <h3 className="title">{title}</h3>
            <ul>
                {caracteristicas.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Objetivo;