import HeroPro          from "./components/HeroPro";
import HowItWorks       from "./components/HowItWorks";
import FeaturesSection  from "./components/FeaturesSection";
import GuidesSection    from "./components/AICoachSection";
import HowWeHelp        from "./components/HowWeHelp";
import TheScience       from "./components/TheScience";
import UbuntuPhilosophy from "./components/UbuntuPhilosophy";
import CrisisSupport    from "./components/CrisisSupport";
import DownloadCTA      from "./components/DownloadCTA";
import FAQ              from "./components/FAQ";

export default function Page() {
  return (
    <>
      <HeroPro />
      <HowItWorks />
      <FeaturesSection />
      <HowWeHelp />
      <TheScience />
      <UbuntuPhilosophy />
      <CrisisSupport />
      <GuidesSection />
      <DownloadCTA />
      <FAQ />
    </>
  );
}
