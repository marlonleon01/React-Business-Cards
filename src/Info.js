import Maya from "./imgs/Maya photo.jpg"

export function Info() {
    return (
        <div className="info">
            {/* Add professsional picture */}
            <img src={Maya} className="professional-img"></img>
            <h1 className="name">Marlon Leon</h1>
            <h2 className="occupation">Frontend Developer</h2>
            {/* Add real website link here when you create it */}
            <h3 className="website-link">Fakewebsitelink.com</h3>
            <button className="email-btn">
                <i class="fa-solid fa-envelope" className="email-icon"></i>Email
            </button>
            <button className="linkedln-btn">
                <i class="fa-brands fa-linkedin" className="linkedln-icon"></i>Linkedln
            </button>
        </div>
    )
}