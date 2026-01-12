import Hero from "../Components/Dashboard/Hero/Hero";
import Features from "../Components/Dashboard/Features";
import HowItWorks from "../Components/Dashboard/HowItWorks";
import CTA from "../Components/Dashboard/CTA";
import Navbar from "../Components/Dashboard/Navbar/Navbar";
function Landing(){
    return (
        <>
        <Navbar/>
        <Hero/>
        <Features/>
        <HowItWorks/>
        <CTA/>
        </>
    )
}
export default Landing;