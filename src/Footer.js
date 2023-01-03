import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquareFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"


export function Footer() {
    return (
        <footer className="footer">
            <a href="https://www.facebook.com/marlon.leon.710" target="_blank" 
            rel="noopener noreferrer" className="anchor-facebook">
                <FontAwesomeIcon icon={faSquareFacebook} className="facebook-icon"></FontAwesomeIcon>
            </a>
            <a href="https://www.instagram.com/marlon.z32/" target="_blank" 
            rel="noopener noreferrer" className="anchor-instagram">
                <FontAwesomeIcon icon={faInstagramSquare} className="instagram-icon"></FontAwesomeIcon>
            </a>
            <a href="https://github.com/marlonleon01" target="_blank" 
            rel="noopener noreferrer" className="anchor-github">
                <FontAwesomeIcon icon={faGithubSquare} className="github-icon"></FontAwesomeIcon>
            </a>
        </footer>
    )
}