import "./AllSightingsPage.css";
import { useState, useEffect } from "react";

function AllSightingsPage() {
    const [sightings, setSightings] = useState([]);
    useEffect (() => {
        fetch("http://localhost:8080/api/sightings")
        .then((response) => response.json())
        .then((data) => {
            const sortedSightings = data.sort((a,b) => {
                const countyA = a.county?.name?.toLowerCase() || "";
                const countyB = b.county?.name?.toLowerCase() || "";
                return countyA.localeCompare(countyB);
        });
            setSightings(sortedSightings); })
        .catch((error) => console.error("Error loading sightings:", error));
    }, []); 

    return (
        <section className="all-sightings-page">
            <div className="all-sightings-title">
                <h1>Sightings Catalog</h1>
            </div>
            <div className="page-layout">
                <div className="sightings-list">
                    {sightings.map((sighting) => (
                        <div key={sighting.id} className="sighting-card">
                            {sighting.imageUrl && (
                                <img src={sighting.imageUrl} alt={`Sighting in ${sighting.location}`} className="sighting-image" />
                            )}
                            <h2>{sighting.location}</h2>
                            <p>
                             <strong>County:</strong> {sighting.county?.name || "Unknown"}   
                            </p>
                            <p>
                             <strong>Date:</strong> {sighting.date}
                            </p>
                            <p>
                              <strong>Description:</strong> {sighting.description}  
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );}
export default AllSightingsPage;