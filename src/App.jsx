import { useState } from "react";
import ThreeBackground from "./components/ThreeBackground";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import NumbersSection from "./components/NumbersSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import EducationAndExpression from "./components/EducationAndExpression";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import LoadingSpinner from "./components/LoadingSpinner";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div style={{ height: "100vh" }}>
      {loading ? (
        <LoadingSpinner onComplete={() => setLoading(false)} />
      ) : (
        <>
          <ThreeBackground />
          <NavBar />
          <HeroSection />
          <NumbersSection />
          <ServicesSection />
          <SkillsSection />
          <EducationAndExpression />
          <ProjectsSection />
          <Footer />
          <BackToTop />
        </>
      )}
    </div>
  );
}

export default App;
