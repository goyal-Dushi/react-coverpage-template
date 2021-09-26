import HeaderSection from "../modules/Header.module";
import ServiceSection from "../modules/Service.module";
import ProductsSection from "../modules/Products.module";
import DigiLearningSection from "../modules/DigiLearning.module";
import FAQdisplay from "../modules/FAQ.module";
import HelpSection from "../modules/Help.module";
import KeepInTouchSection from "../modules/KeepInTouch.module";
import BottomNav from "../components/bottomNav";

function LandingPage() {
  return (
    <>
      <HeaderSection />
      <ServiceSection />
      <ProductsSection />
      <DigiLearningSection />
      <FAQdisplay />
      <HelpSection />
      <KeepInTouchSection />
      <BottomNav />
    </>
  );
}

export default LandingPage;
