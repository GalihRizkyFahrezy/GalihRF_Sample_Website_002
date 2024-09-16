import Hero from "../components/Hero";
import Motto from "../components/Motto";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Products from "../components/Products";
import Team from "../components/Team";
import About from "./About";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileShield, faRocket, faServer, faTerminal } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";



export default function Home()
{

    const rocket = <FontAwesomeIcon icon={faRocket} size="2xl"/>
    const shield = <FontAwesomeIcon icon={faFileShield} size="2xl"/>
    const terminal = <FontAwesomeIcon icon={faTerminal} size="2xl"/>
    const server = <FontAwesomeIcon icon={faServer} size="2xl"/>




    return(
        <>
            <div>
                <Navbar/>
                <Hero/>
                <Motto/>
                <div className="container mx-auto py-10">
                        <Products title="Cyber Security" icon={shield} />
                        <Products title="Productivity" icon={rocket} />
                        <Products title="IT Consulting" icon={terminal} />
                        <Products title="Data Management" icon={server} />
                </div>
                <Team/>
                <Partners/>
                <Footer/>
            </div>
        </>
    );
}