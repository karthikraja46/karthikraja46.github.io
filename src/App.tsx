import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Learning } from "./sections/Learning";
import { EducationSection } from "./sections/EducationSection";
import { Approach } from "./sections/Approach";
import { Contact } from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Learning />
        <EducationSection />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
