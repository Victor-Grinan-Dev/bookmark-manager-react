import DownLoadBoxes from "./components/DownLoadBoxes";
import Download from "./components/Download";
import FAQ from "./components/FAQ";
import FAQAccordion from "./components/FAQAccordion";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Tabs from "./components/Tabs";
function App() {

  return <div className="min-h-screen overflow-x-hidden">
    <NavBar />
    <Hero />
    <Features />
    <Tabs />
    <Download />
    <DownLoadBoxes />
    <FAQ />
    <FAQAccordion />
    <Newsletter />
    <Footer />

  </div>;
}
export default App;
