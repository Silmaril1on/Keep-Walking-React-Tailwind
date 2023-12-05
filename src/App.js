import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./layout/footer/Footer";
import NavigationBar from "./layout/navigation/navigationBar/NavigationBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
