import React from 'react';
import { Button } from 'react-bootstrap';

import './Home.css';
import Timer from '../Timer/Timer';

const Home = () => {
    return(
        <div className='home'>
            <div className="landing flex flex-col justify-center items-center content-center">
            <h1 className="font-bold">ODS</h1>
            <h3 className='subtitle uppercase font-medium'>Para cumplir con la meta de 2023</h3>
            <Timer />
        </div>
        <Button variant='primary'>Iniciar</Button>
        </div>
    )
}

export default Home;