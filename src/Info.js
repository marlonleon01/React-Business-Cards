import Maya from "./imgs/Maya photo.jpg"

export function Info() {
    return (
        <div>
            {/* Add professsional picture */}
            <img src={Maya}></img>
            <h1>Marlon Leon</h1>
            <h2>Frontend Developer</h2>
            {/* Add real website link here when you create it */}
            <h3>Fakewebsitelink.com</h3>
            <button className="email-btn"><i class="fa-solid fa-envelope"></i>Email</button>
            <button className="linkedln-btn"><i class="fa-brands fa-linkedin"></i>Linkedln</button>
        </div>
    )
}