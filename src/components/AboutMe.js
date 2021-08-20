import React from 'react'

import '../assets/css/AboutMe.css'

import AMImage from '../assets/images/perfil.png'

import CV from '../components/CV'

function AboutMe(){
    return(
        <div className="section-margin container container-fluid" id="aboutme">
            <div className="card my-card">
                <div className="row">
                    <div className="card-s justify-content-center d-flex flex-column col-md-4">
                        <img src={AMImage} alt="" className="img-card img-fluid justify-content-center"></img>
                    </div>
                    <div className="card-body col-md-8">
                        <h2 className="card-tittle about-tittle">¿Quién soy?</h2>
                        <p className="text-light about-text">Soy una persona apasianada por la programación. He enfocado
                            mis estudios en desarrollo web de back-end y front-end, diseño e implementación de bases de datos
                            y desarrollo de entornos virtuales en VR, AR y videojuegos.
                        </p>
                        <div>
                            <CV/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe