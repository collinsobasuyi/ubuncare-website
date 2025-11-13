import HeroPro from "./components/HeroPro/HeroPro";
// import IconCloud from "./components/IconCloud";
import AICoachSection from "./components/AICoachSection";
// import SecurityStrip from "./components/SecurityStrip";
import FAQ from "./components/FAQ";
import WaitlistForm from "./components/WaitlistForm";
import FeaturesSection from "./components/FeaturesSection";
import WhyItWorks from "./components/WhyItWorks";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import TheScience from "./components/TheScience";
import HowWeHelp from "./components/HowWeHelp";
// import AIResults from "./components/AIResults";
// import HowItWorks from "./components/HowItWorks";

export default function Page() {
  return (
    <>
      <HeroPro />
      <HowItWorks />
      <AICoachSection />
      <FeaturesSection />
      <TheScience />
      <WhyItWorks />
      <HowWeHelp />
      <WaitlistForm />
      <FAQ />
    </>
  );
}
