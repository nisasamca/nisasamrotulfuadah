import { Certificate } from "crypto";
import About from "./components/about";
import Competency from "./components/competency";
import FloatingNavbar from "./components/floating_nav";
import Home from "./components/home";
import Projects from "./components/projects";
import CertificationPage from "./components/certificate";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Page() {
  return (
    <>
      <FloatingNavbar />
      <Home />
      <About />
      <Projects />
      <Competency />
      <CertificationPage/>
      <Contact/>
      <Footer />

    </>
  );
}

