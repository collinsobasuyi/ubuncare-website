import HeroPro from "./components/HeroPro";
import IconCloud from "./components/IconCloud";
import AICoach from "./components/AICoach";
import Testimonials from "./components/Testimonials";
import SecurityStrip from "./components/SecurityStrip";
import FAQ from "./components/FAQ";
import WaitlistForm from "./components/WaitlistForm";
import SocialProof from "./components/SocialProof";
import FeaturesSections from "./components/FeaturesSections";
import HowItWorks from "./components/HowItWorks";

export default function Page() {
  return (
    <>
   
      <HeroPro />
      <FeaturesSections />
      <SocialProof />
      <IconCloud />
      <HowItWorks />
      <AICoach />
      <Testimonials />
      <SecurityStrip />
      <WaitlistForm />
      <FAQ />
    </>
  );
}
