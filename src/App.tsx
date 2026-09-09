import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/layout/Footer";
import { Masthead } from "./components/layout/Masthead";
import { NavBar } from "./components/layout/NavBar";
import { BulletinPage } from "./pages/BulletinPage";
import { Home } from "./pages/Home";
import { StoryPage } from "./pages/StoryPage";

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header>
        <Masthead />
        <NavBar />
      </header>
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story/:slug" element={<StoryPage />} />
          <Route path="/update/:slug" element={<BulletinPage />} />
        </Routes>
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics/>
    </BrowserRouter>
  );
}

export default App;
