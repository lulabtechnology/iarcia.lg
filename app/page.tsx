import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import MigrationSection from "../components/MigrationSection";
import FamilySection from "../components/FamilySection";
import DomesticViolenceSection from "../components/DomesticViolenceSection";
import AboutSection from "../components/AboutSection";
import CaseEvaluationSection from "../components/CaseEvaluationSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <MigrationSection />
      <FamilySection />
      <DomesticViolenceSection />
      <AboutSection />
      <CaseEvaluationSection />
      <ContactSection />
    </div>
  );
}
