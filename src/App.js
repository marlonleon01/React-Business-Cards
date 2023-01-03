import { Info } from "./Info";
import { About } from "./About";
import { Interests } from "./Interests";
import { Footer } from "./Footer";

export function App() {
    return(
        <div className="all-content">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
