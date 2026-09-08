import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Masthead } from "./components/layout/Masthead";
import { NavBar } from "./components/layout/NavBar";
import { Ticker } from "./components/layout/Ticker";
import { UtilityBar } from "./components/layout/UtilityBar";
import { Home } from "./pages/Home";
import { StoryPage } from "./pages/StoryPage";

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header>
        <UtilityBar />
        <Masthead />
        <NavBar />
        <Ticker />
      </header>
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story/:slug" element={<StoryPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
