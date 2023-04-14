import React from 'react';
import { Button } from 'react-bootstrap';

import './Home.css';
import Timer from '../Timer/Timer';
import Content from '../Content/Content';
// import logoODS from  '../../assets/svg/logoODS_guinda.svg';

const Home = () => {
    return(
        <div className='home'>
            <div className="landing">

                <div className="container">
                    {/* <img className='ods-logo' src={logoODS} alt="" /> */}
                    {/* <h3 className='subtitle'>Para cumplir con la meta de 2023</h3> */}
                    <Timer />
                </div>
                
                <Button variant='primary'>Iniciar</Button>
            </div>
            

            <Content />
        </div>
    )
}

export default Home;