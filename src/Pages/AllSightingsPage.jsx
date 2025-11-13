import "./AllSightingsPage.css";
import Button from "../components/Button";
import { useState, useEffect } from "react";

function AllSightingsPage() {
    const [sightings, setSightings] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedDescription, setEditedDescription] = useState("");
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

    const handleEditClick = (id, currentDescription) => {
        setEditingId(id);
        setEditedDescription(currentDescription);
    };

    const handleUpdate = (id) => {
        fetch(`http://localhost:8080/api/sightings/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ description: editedDescription }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to update sighting.");
    }
            return response.json();
        })
        .then((updatedSighting) => {
            setSightings((prevSightings) =>
                prevSightings.map((sighting) =>
                    sighting.id === id ? {...sighting, description: updatedSighting.description } : sighting)
        );
    setEditingId(null);
        })
        .catch((error) => console.error("Error updating sighting:", error));
    };

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
                            {editingId === sighting.id ? (
                                <>
                                <textarea 
                                value={editedDescription}
                                onChange={(e) => setEditedDescription(e.target.value)}
                                rows="6"/>
                                <Button 
                                label="Save"
                                onClick={() => handleUpdate(sighting.id)}/>
                                <Button 
                                label="Cancel"
                                onClick={() => setEditingId(null)}/>
                                </>
                            ) : (
                                <>
                            <p>
                              <strong>Description:</strong> {sighting.description}  
                            </p>
                            <Button 
                            label="Edit Description"
                            onClick={() => handleEditClick(sighting.id, sighting.description)}/>
                            </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );}
export default AllSightingsPage;