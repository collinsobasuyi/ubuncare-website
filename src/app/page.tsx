import HeroPro from "./components/HeroPro";
// import IconCloud from "./components/IconCloud";
import AICoach from "./components/AICoach";
import SecurityStrip from "./components/SecurityStrip";
import FAQ from "./components/FAQ";
import WaitlistForm from "./components/WaitlistForm";
import FeaturesSection from "./components/FeaturesSection";
import WhyItWorks from "./components/WhyItWorks";
import AIResults from "./components/AIResults";
// import HowItWorks from "./components/HowItWorks";

export default function Page() {
  return (
    <>
      <HeroPro />
      <AICoach />
      <AIResults />
      <FeaturesSection />
      <WhyItWorks />
      {/* <IconCloud /> */}
      {/* <HowItWorks /> */}

      <SecurityStrip />
      <WaitlistForm />
      <FAQ />
    </>
  );
}
