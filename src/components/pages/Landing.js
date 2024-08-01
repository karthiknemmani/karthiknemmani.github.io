import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Landing() {
    const white = { color: 'white', fontWeight: 'bold' };
    return (
        <Container fluid className="landing-container" style={{ backgroundColor: "#374f2f" }}>
            <div className="p-5">
                <h1 className="display-2 p-5" style={white}>I'm Karthik, a CS student at UT Austin.</h1>
                <h1 className="lead" style={{color: 'white', fontSize: '24px'}}>Interested in machine learning, systems, and computational linguistics, and an avid sports enthusiast.</h1>
            </div>
            <div className="social-icons">
                <a href="https://github.com/karthiknemmani" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" style={{ margin: '10px', color: 'white' }} />
                </a>
                <a href="https://www.linkedin.com/in/karthiknemmani/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ margin: '10px', color: 'white' }} />
                </a>
            </div>
        </Container>
    );
}
