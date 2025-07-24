import "./SightingFormPage.css";
import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
function SightingFormPage({ setSightingsByCounty }) {
  const [address, setAddress] = useState(""); //keeps up with whatever address input
  const [isChecked, setIsChecked] = useState(false);//the checkbox input
  const [checkboxError, setCheckboxError] = useState("");//error for not checking the box
  const [errorMessage, setErrorMessage] = useState("");//error message
  const [successMessage, setSuccessMessage] = useState("");//success message

  function handleLocationChange(event) {
    setAddress(event.target.value);
  }
//the function below is to check that all validations are met on submit.
//  Uses Fetch to check addresses from an API. If its all valid it updates sightings
//  and gives a success message. If its wrong it gives an error message.
  function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setCheckboxError("");
    if (!isChecked) {
      setCheckboxError("Confirm your sighting before submitting");
      return;
    }
    if (address === "") {
      setErrorMessage("Enter an address.");
      return;
    }
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&addressdetails=1`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setErrorMessage("Address not found.");
          return;
        }
        const state = data[0].address.state;
        if (state !== "New Jersey") {
          setErrorMessage("Please enter an address within New Jersey.");
          return;
        }
        const countyWithSuffix = data[0].address.county || "Unknown";
        setSightingsByCounty((prev) => ({
          ...prev,
          [countyWithSuffix]: (prev[countyWithSuffix] || 0) + 1,
        }));
        setAddress("");
        setSuccessMessage(
          "Thank you! Your sighting was succesfully sumbitted to our tracker.",
        );
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage("Failed to find location.");
      });
  }
//below is moreso the order and divisions of the page that can be edited in css
  return (
    <section className="sighting-form-page">
      <h1>Submit Your Own Sighting</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="address">Enter address:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={handleLocationChange}
            placeholder='e.g. "123 5th Ave, Town,NJ"'
          />
          <p>Please numeric street names: e.g. "5th", not "Fifth".</p>

          <label className="confirm-checkbox">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            I confirm this sighting is accurate.
          </label>
          {checkboxError && <Alert message={checkboxError} type="error" />}
          {successMessage && <Alert message={successMessage} type="succes" />}
          {errorMessage && <Alert message={errorMessage} type="error" />}
        </div>
        <Button type="submit" label="Submit" />
      </form>
    </section> //the code above checks and validates the input returning a specific message depending on user actions
  );
}
export default SightingFormPage;
