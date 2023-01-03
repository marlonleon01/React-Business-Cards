import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquareFacebook} from "@fortawesome/free-brands-svg-icons"
import {faInstagramSquare} from "@fortawesome/free-brands-svg-icons"
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons"


export function Footer() {
    return (
        <footer>
            <a href="https://www.facebook.com/marlon.leon.710" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSquareFacebook}></FontAwesomeIcon>
            </a>
            <a href="https://www.instagram.com/marlon.z32/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
            </a>
            <a href="https://github.com/marlonleon01" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon>
            </a>
        </footer>
    )
}