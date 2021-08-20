import React from 'react'

import '../assets/css/Nav.css'

import Presentation from './Presentation'
import AboutMe from './AboutMe'
import Tool from './Tool';
import Myprojects from './Myprojects';
import Education from './Education';

function Mypage(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg my-navbar navbar-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">Alexis Orozco</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse nav-options navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">                         
                            <a className="nav-link my-nav-link" href="#aboutme">Sobre mi</a>
                            <a className="nav-link my-nav-link" href="#tools">Herramientas</a>
                            <a className="nav-link my-nav-link" href="#projects">Proyectos</a>
                            <a className="nav-link my-nav-link" href="#education">Mis estudios</a>
                        </div>
                    </div>
                </div>
            </nav>
            <Presentation/>
            <AboutMe/>
            <Tool/>
            <Myprojects/>
            <Education/>
        </div>
    );
}

export default Mypage