import HeroPro from "./components/HeroPro";
import IconCloud from "./components/IconCloud";
import AICoach from "./components/AICoach";
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
      <SocialProof />
      <IconCloud />
      <HowItWorks />
      <FeaturesSections />
      <AICoach />
      <SecurityStrip />
      <WaitlistForm />
      <FAQ />
    </>
  );
}
