import React from 'react'
import './notSoBrief.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faGraduationCap, faCalendar, faBuildingColumns, faUserGraduate } from '@fortawesome/free-solid-svg-icons';



export function NotSoBrief(props) {
    return (
        <>
            <div className="notSoBrief-container">
                <div id='profile'>
                    <h1><FontAwesomeIcon className='icon' icon={faUser} />PROFILE</h1>
                    <p style={{ fontSize: '20px' }}>
                        {props.about}
                    </p>
                </div>
                <hr id='notSoBrief-hr'></hr>
                <div id='experience'>
                    <h1><FontAwesomeIcon className='icon' icon={faBriefcase} />EXPERIENCE</h1>
                    <p style={{ fontSize: '20px' }}>
                        {props.experience}
                    </p>
                </div>
                <hr id='notSoBrief-hr'></hr>
                <div id='education'>
                    <h1><FontAwesomeIcon className='icon' icon={faUserGraduate} />EDUCATION</h1>
                    <p style={{ fontSize: '20px' }}>

                        <p>
                            <FontAwesomeIcon className='paddingRight-university' icon={faBuildingColumns} /> {props.university}
                        </p>
                        <p>
                            <FontAwesomeIcon className='paddingRight-year' icon={faCalendar} /> {props.year}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faGraduationCap} /> {props.course}
                        </p>
                    </p>
                </div>
            </div>
        </>
    )
}

export default NotSoBrief
