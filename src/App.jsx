import Navbar from "./components/navbar.jsx";
import Hero from "./components/sections/Hero.jsx";
import CoreSkills from "./components/sections/CoreSkills.jsx";
import WorkTimeline from "./components/sections/WorkTimeline.jsx";
import Education from "./components/sections/Education.jsx";
import ContactGrid from "./components/sections/ContactGrid.jsx";

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <section id="skills">
          <CoreSkills />
        </section>
        <section id="experience">
          <WorkTimeline />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <ContactGrid />
        </section>
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Zhang Fangchao</footer>
    </div>
  );
}
