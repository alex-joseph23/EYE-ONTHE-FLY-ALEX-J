import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";
import SightingFormPage from "./Pages/SightingFormPage";
import ResourcesPage from "./Pages/ResourcesPage";
//those lines above are calling all my imports that are coded elsewhere so that
//i can use them in this code for things like routing my pages.
function App() {
  const [sightingsByCounty, setSightingsByCounty] = useState({});

  useEffect(() => { fetch("http://localhost:8080/api/sightings/count-by-county")
      .then((response) => response.json())
      .then((data) => setSightingsByCounty(data))
      .catch((error) => console.error("Error loading sightings:", error));
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        {/* double slash wont work again lol, line 16 renders my code from header
        which is my navbar and applies it to the whole site. Same concept but footer on 
        line 39 */}
        <main>
          {/* Below is the routing to change pages */}
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
