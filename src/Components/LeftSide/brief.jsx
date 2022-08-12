import React from 'react'
import './brief.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import linkedInIcon from './SVG/linkedin.svg';
import reactIcon from './SVG/react.svg';
import pythonIcon from './SVG/python.svg';
import javaIcon from './SVG/java.svg';
import dbMySQLIcon from './SVG/db-mysql.svg';
import verilogIcon from './SVG/verilog.svg';
import filledDot from './SVG/filledDot.svg';
import unfilledDot from './SVG/unfilledDot.svg';
import typewriterIcon from './SVG/typewriter.svg';
import gitHubIcon from './SVG/github.svg';

export function Brief(props) {

    const fillDot = {
        react: props.reactDots > 5 ? 5 : props.reactDots,
        python: props.pythonDots > 5 ? 5 : props.pythonDots,
        java: props.javaDots > 5 ? 5 : props.javaDots,
        database: props.databaseDots > 5 ? 5 : props.databaseDots,
        verilog: props.verilogDots > 5 ? 5 : props.verilogDots,
        typing: props.typingDots > 5 ? 5 : props.typingDots
    }


    return (
        <>
            <div className="brief-container">
                <div className='cotainer-wrapper'>
                    <div id='identity'>
                        <h1 id='firstName'>{props.firstName}</h1>
                        <h1 id='lastName'>{props.lastName}</h1>
                        <hr id='brief-hr'></hr>
                    </div>
                    <div id='contact-info'>
                        <h3>CONTACT</h3>
                        <div className='details'>
                            <p><FontAwesomeIcon icon={faLocationDot} /> {props.location}</p>
                            <p><FontAwesomeIcon icon={faPhone} /> {props.phoneNumber}</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> {props.email}</p>
                            <p id='linkedIn'><img src={gitHubIcon} alt='GitHub' style={{ paddingRight: '1px', width: '20px', height: '20px' }}></img><a id='link-to-github' target="_blank" rel="noreferrer" href={props.gitHubLink}> {props.linkedInUsername}</a></p>
                            <p id='linkedIn'><img src={linkedInIcon} alt='LinkedIn' style={{ paddingRight: '1px', width: '20px', height: '20px' }}></img><a id='link-to-linkedin' target="_blank" rel="noreferrer" href={props.linkedInLink}> {props.gitHubUsername}</a></p>
                        </div>
                    </div>
                    <div id='skills-info'>
                        <h3>SKILLS</h3>
                        <div className='details'>
                            <p ><img src={reactIcon} alt='React'></img>
                                <img src={fillDot.react >= 1 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.react >= 2 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.react >= 3 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.react >= 4 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.react === 5 ? filledDot : unfilledDot} alt='Dot'></img>
                            </p>
                            <p><img src={pythonIcon} alt='Python'></img>
                                <img src={fillDot.python >= 1 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.python >= 2 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.python >= 3 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.python >= 4 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.python === 5 ? filledDot : unfilledDot} alt='Dot'></img>
                            </p>
                            <p><img style={{ marginLeft: '-6px' }} src={javaIcon} alt='Java'></img>
                                <img src={fillDot.java >= 1 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.java >= 2 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.java >= 3 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.java >= 4 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.java === 5 ? filledDot : unfilledDot} alt='Dot'></img>
                            </p>
                            <p><img src={dbMySQLIcon} alt='Database - MYSQL'></img>
                                <img src={fillDot.database >= 1 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.database >= 2 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.database >= 3 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.database >= 4 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.database === 5 ? filledDot : unfilledDot} alt='Dot'></img>
                            </p>
                            <p><img src={verilogIcon} alt='Verilog HDL'></img>
                                <img src={fillDot.verilog >= 1 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.verilog >= 2 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.verilog >= 3 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.verilog >= 4 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.verilog === 5 ? filledDot : unfilledDot} alt='Dot'></img>
                            </p>

                            <p><img src={typewriterIcon} alt='Typing'></img>
                                <img src={fillDot.typing >= 1 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.typing >= 2 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.typing >= 3 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.typing >= 4 ? filledDot : unfilledDot} alt='Dot'></img>
                                <img src={fillDot.typing === 5 ? filledDot : unfilledDot} alt='Dot'></img>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brief;

