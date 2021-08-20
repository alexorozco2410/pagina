import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
/*import { faBell } from '@fortawesome/free-solid-svg-icons';*/
import { faBootstrap, faCss3Alt, faGitAlt, faGithubSquare, faHtml5, faJs, faNodeJs, faPhp, faReact, faUbuntu, faUnity } from '@fortawesome/free-brands-svg-icons';

import mysqlIcon from '../assets/images/mysql-logo2.png'
import vscodeIcon from '../assets/images/vscode-logo.png'
import blenderIcon from '../assets/images/blender-logo.png'
import ciIcon from '../assets/images/codeigniter-logo.png'

import '../assets/css/Tool.css'

const tools=[
    {
        id: 1,
        tool: faHtml5,
        name: "HTML5"
    },
    {
        id: 2,
        tool: faCss3Alt,
        name: "Css"
    },
    {
        id: 3,
        tool: faJs,
        name: "JavaScript"
    },
    {
        id: 4,
        tool: faBootstrap,
        name: "Bootstrap"
    },
    {
        id: 5,
        tool: faGitAlt,
        name: "Git"
    },
    {
        id: 6,
        tool: faGithubSquare,
        name: "Github"
    },
    {
        id: 7,
        tool: faUbuntu,
        name: "Ubuntu"
    },
    {
        id: 8,
        tool: faPhp,
        name: "PHP"
    },
    {
        id: 9,
        tool: faReact,
        name: "React"
    },
    {
        id: 10,
        tool: faUnity,
        name: "Unity",
    },
    {
        id: 11,
        tool: faNodeJs,
        name: "NodeJS"
    }
]

const tools2=[
    {
        id: 12,
        tool: mysqlIcon,
        name: "Mysql"
    },
    {
        id: 13,
        tool: vscodeIcon,
        name: "Visual Studio Code"
    },
    {
        id: 14,
        tool: blenderIcon,
        name: "Blender"
    },
    {
        id: 15,
        tool: ciIcon,
        name: "CodeIgniter"
    }
]

function Tool(){
    return(
        <div className="section-margin mt-p container container-fluid align-items-center" id="tools">
            <div>
                <h2 className="tools-tittle">He trabajado con las siguientes herramientas:</h2>
            </div>
            <div className="row justify-content-center my-tools">
                {
                    tools.map(t => (
                        <div className="card-father col-md-2 tool-item">
                            <div className="front-content" key={t.id}>
                                <FontAwesomeIcon icon={t.tool}/>
                            </div>
                            <div className="back-content">
                                <p>{t.name}</p>
                            </div>   
                        </div>
                    ))
                }
                {
                    tools2.map(t2 => (
                        <div className="card-father col-md-2 tool-item">
                            <div className="front-content" key={t2.id}>
                                <img className="img-tool flex-column justify-content-center" src={t2.tool} alt=""></img>
                            </div>
                            <div className="back-content">
                                <p>{t2.name}</p>
                            </div> 
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Tool