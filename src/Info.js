import Marlon from "./imgs/Professional Photo.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"

export function Info() {
    return (
        <div>
            {/* Add new professsional picture */}
            <img src={Marlon} className="professional-img"></img>
            <div className="info">
                <h1 className="name">Marlon Leon</h1>
                <h2 className="occupation">Frontend Developer</h2>
                {/* Add real website link here when you create it */}
                <h3 className="website-link-text">
                    <a className="website-link" href="" target="_blank" rel="noopener noreferrer">
                        Fakewebsitelink.com
                    </a>
                </h3>
                <button className="email-btn">
                <FontAwesomeIcon icon={faEnvelope} className="email-icon"></FontAwesomeIcon>Email
                </button>
                <button className="linkedin-btn">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"></FontAwesomeIcon>LinkedIn
                </button>
            </div>
        </div>
    )
}