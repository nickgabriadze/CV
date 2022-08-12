import React from 'react';
import { Brief } from './Components/LeftSide/brief.jsx';
import { NotSoBrief } from './Components/RightSide/notSoBrief.jsx';
import './CV.css';

function CV() {

  const about = ``
  const experience = ``

  return (
    <>
      <div className='container'>
        <div>
          <Brief
            firstName='Name'
            lastName='Surname'
            location={'City, State, Country'}
            phoneNumber={'Phone Number'}
            email={'email@example.com'}
            linkedInLink={'https://www.linkedin.com/in'}
            linkedInUsername={'LinkedInUsername'}
            gitHubLink={'https://github.com/'}
            gitHubUsername={'GitHubUsername'}
            reactDots={5}
            pythonDots={5}
            javaDots={5}
            databaseDots={5}
            verilogDots={5}
            typingDots={5}
          />
        </div>
        <div id='line'></div>
        <div>
          <NotSoBrief
            about={about}
            experience={experience}
            university={'University'}
            year={'Year'}
            course={'Course'}
          />
        </div>

      </div>
    </>
  );
}

export default CV;
