import React from 'react'

import '../assets/css/CVmodal.css'
import pdf from '../assets/documents/CV_Alexis_Orozco.pdf'

const pulsar = () => {
    document.querySelector('.overlay').style.visibility = 'hidden';
    document.querySelector('.overlay').style.opacity = 0;
    document.querySelector('.abcd').style.display = "unset";
}

const showCV = () => {
    document.querySelector('.abcd').style.display = "unset";
    document.querySelector('.overlay').style.visibility = 'visible';
    document.querySelector('.overlay').style.opacity = 1;
}

function CV(){ 
    return(
        <div className="btn-cv">
            <button className="btn my-cv-btn" onClick={()=>showCV()}>Mi CV</button>
            <div className="abcd">
                <div className="overlay d-flex justify-content-center align-items-center">
                    <div className="cv-modal-cont">
                        <div className="row d-flex taman">
                            <div className="modal-header d-flex justify-content-center">
                                <p className="modal-tittle">CV Alexis Orozco Hernández</p>
                                <button type="button" className="btn b-close" aria-label="Close" onClick={()=>pulsar()}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="h-100 d-flex justify-content-center">
                                <object className="cv-view" data={pdf}></object>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default CV