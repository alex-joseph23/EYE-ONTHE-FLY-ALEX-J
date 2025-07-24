import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";
import SightingFormPage from "./Pages/SightingFormPage";
import ResourcesPage from "./Pages/ResourcesPage";
function App() {
  const [sightingsByCounty, setSightingsByCounty] = useState({});
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/map"
              element={<MapPage sightingsByCounty={sightingsByCounty} />}
            />
            <Route
              path="/submitSighting"
              element={
                <SightingFormPage
                  sightingsByCounty={sightingsByCounty}
                  setSightingsByCounty={setSightingsByCounty}
                />
              }
            />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
