import Maya from "./imgs/Maya photo.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"

export function Info() {
    return (
        <div>
            {/* Add professsional picture */}
            <img src={Maya} className="professional-img"></img>
            <div className="info">
                <h1 className="name">Marlon Leon</h1>
                <h2 className="occupation">Frontend Developer</h2>
                {/* Add real website link here when you create it */}
                <h3 className="website-link">Fakewebsitelink.com</h3>
                <button className="email-btn">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Email
                </button>
                <button className="linkedin-btn">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>LinkedIn
                </button>
            </div>
        </div>
    )
}