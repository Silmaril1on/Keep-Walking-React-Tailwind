import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import NavigationBar from "./layout/navigation/navigationBar/NavigationBar";
import Home from "./pages/home/Home";
import OurWhisky from "./pages/our-whisky/OurWhisky";
import WhiskyCocktails from "./pages/whisky-cocktails/WhiskyCocktails";
import WhiskyGuide from "./pages/whisky-guide/WhiskyGuide";
import WhiskyGifts from "./pages/whisky-gifts/WhiskyGifts";
import Sustainability from "./pages/sustainability/Sustainability";
import PrinceStreet from "./pages/prince-street/PrinceStreet";
import KeepWalking from "./pages/keep-walking/KeepWalking";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-whisky" element={<OurWhisky />} />
        <Route path="/whisky-cocktails" element={<WhiskyCocktails />} />
        <Route path="/whisky-guide" element={<WhiskyGuide />} />
        <Route path="/our-whisky-gifts" element={<WhiskyGifts />} />
        <Route path="/nextsteps" element={<Sustainability />} />
        <Route path="/visit-us-princes-street" element={<PrinceStreet />} />
        <Route path="/keep-walking" element={<KeepWalking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
