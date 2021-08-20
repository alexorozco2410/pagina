import React from 'react'

import '../assets/css/Education.css'

const studies=[
    {
        id_s: 1,
        name_s: "Ingeniería en computación con profundización en ingeniería de software",
        school_s: "Facultad de Ingeniería UNAM",
        time_s: "Agosto 2015 - Febrero 2021"
    },
    {
        id_s: 2,
        name_s: "Diplomado: Diseño y programacón de videojuegos",
        school_s: "Facultad de Ingeniería UNAM",
        time_s: "Septiembre 2021 - Marzo 2022"
    },
    {
        id_s: 3,
        name_s: "Idioma inglés. Nivel B1",
        school_s: "CELEX UPIICSA. IPN",
        time_s: "Abril 2021 - Actualidad"
    },
    {
        id_s: 4,
        name_s: 'Curso: "Programador de videojuegos"',
        school_s: "FI UNAM. SODVI",
        time_s: "Junio 2019 - Julio 2019"
    }
]

function Education(){
    return(
        <div className="mt-0 mb-5 container container-fluid" id="education">
            <div className="row e-table">
                <h2 className="tittle-e">Mis estudios</h2>
                <table className="table my-table">
                    <thead className="my-thead">
                        <tr>
                            <th className="t-tittle" scope="col">Conocimiento</th>
                            <th className="t-tittle" scope="col">Escuela</th>
                            <th className="t-tittle" scope="col">Tiempo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studies.map(s => (
                                <tr className="my-thover" key={s.id_s}>
                                    <td className="t-text">{s.name_s}</td>
                                    <td className="t-text">{s.school_s}</td>
                                    <td className="t-text">{s.time_s}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Education