import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />

      {/* Floating Download CV button */}
      <a
        href="/cv.pdf"
        download="Suresh_Moktan_CV.pdf"
        className="fixed bottom-6 right-6 px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 z-50"
      >
        Download CV
      </a>
    </>
  );
}

export default App;
