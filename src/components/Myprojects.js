import React from 'react'

import '../assets/css/Myprojects.css'

import p1Img from '../assets/images/dicyg-logo.png'

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
                                    <div className="justify-content-center d-flex">
                                        <img src={p1Img} alt="" className="project-img img-fluid h-100 justify-content-center"></img>
                                    </div>
                                    <div className="card-body my-card-body">
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
                                        <a className="btn my-btn">Descripción</a>
                                        <br></br>
                                        <a className="btn my-btn">Github</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="size-pc col-md-4 d-flex justify-content-center">
                            <div className="card project-card">
                                <div className="row margin-card">
                                    <div className="justify-content-center d-flex">
                                        <img src={p1Img} alt="" className="project-img img-fluid h-100 justify-content-center"></img>
                                    </div>
                                    <div className="card-body my-card-body">
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
                                    <div className="row d-flex justify-content-center">
                                        <a className="btn my-btn">Descripción</a>
                                        <br></br>
                                        <a className="btn my-btn">Github</a>
                                    </div>
                                </div>
                            
                            </div>
                        </div>

                        <div className="size-pc col-md-4 d-flex justify-content-center">
                            <div className="card project-card">
                                <div className="row margin-card">
                                    <div className="justify-content-center d-flex">
                                        <img src={p1Img} alt="" className="project-img img-fluid h-100 justify-content-center"></img>
                                    </div>
                                    <div className="card-body my-card-body">
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
                                    <div className="row d-flex justify-content-center">
                                        <a className="btn my-btn">Descripción</a>
                                        <br></br>
                                        <a className="btn my-btn">Github</a>
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