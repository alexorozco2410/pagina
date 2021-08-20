import React from 'react'

import '../assets/css/Myprojects.css'

import p1Img from '../assets/images/dicyg-logo.png'
import ts3Img from '../assets/images/proyecto_ts3.png'

function Myprojects(){
    return(
        <div className="pt-5 pb-5" id="projects">
            <div className=" bg-projects d-flex align-items-center">
                <div className="container container-fluid align-items-center cont-projects">
                    <div className="projects-tittle">
                        <p>Proyectos realizados</p>
                    </div>
                    <div className="row d-flex justify-content-center body2">
                        <div className="size-pc col-md-4 d-flex justify-content-center">
                            <div className="card project-card">
                                <div className="row margin-card">
                                    <div className="justify-content-center d-flex align-items-center">
                                        <img src={p1Img} alt="" className="project-img img-fluid h-100 justify-content-center"></img>
                                    </div>
                                    <div className="card-body my-card-body d-flex justify-content-center align-items-center">
                                        <p className="project-name">Historial de soportes técnicos</p>
                                    </div>
                                </div>

                                <div className="hover-card d-flex justify-content-center flex-column h-100">
                                    <p className="hover-text">Proyecto realizado en servicio social para la División de 
                                        Ingeniería Civil y Geomatica (DICYG) de la UNAM
                                    </p>
                                    <p className="text-btns">
                                        ¿Quieres saber más?
                                    </p>
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <a href="https://github.com/alexorozco2410/SistemaSoportes" target="_blank" rel="noreferrer" className="btn my-btn">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="size-pc col-md-4 d-flex justify-content-center">
                            <div className="card project-card">
                                <div className="row margin-card">
                                    <div className="justify-content-center d-flex align-items-center">
                                        <img src={ts3Img} alt="" className="project-img img-fluid h-100 justify-content-center"></img>
                                    </div>
                                    <div className="card-body my-card-body d-flex justify-content-center align-items-center">
                                        <p className="project-name">Maquetas en RA</p>
                                    </div>
                                </div>

                                <div className="hover-card d-flex justify-content-center flex-column h-100">
                                    <p className="hover-text">Aplicación para hacer maquetas en realidad aumentada,
                                    presentado en la materia de Temas Selectos 3
                                    </p>
                                    <p className="text-btns">
                                        ¿Quieres saber más?
                                    </p>
                                    <div className="row d-flex justify-content-center">
                                        <a href="https://github.com/alexorozco2410/TS3Proyecto" target="_blank" rel="noreferrer" className="btn my-btn">Github</a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Myprojects