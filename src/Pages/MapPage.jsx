import CountyItem from "../components/CountyItem";
import "./MapPage.css";
function MapPage({ sightingsByCounty }) { //component recieving sighting data
  const counties = [
    "Atlantic County",
    "Bergen County",
    "Burlington County",
    "Camden County",
    "Cape May County",
    "Cumberland County",
    "Essex County",
    "Gloucester County",
    "Hudson County",
    "Hunterdon County",
    "Mercer County",
    "Middlesex County",
    "Monmouth County",
    "Morris County",
    "Ocean County",
    "Passaic County",
    "Salem County",
    "Somerset County",
    "Sussex County",
    "Union County",
    "Warren County",
  ];
  //Below the function changes the color of the county cards 
  // depending on the number of sightings
  function getColor(count) {
    if (!count) return "#eeeeee";
    if (count < 3) return "#ffcccc";
    if (count < 10) return "#ff8888";
    return "#ff0000";
  }
  //below is page structure
  return (
    <section>
      <h1>Spotted LanternFly Sightings In New Jersey By County</h1>
      <div className="county-lines">
        {" "}
        {counties.map((county) => {
          const count = sightingsByCounty[county] || 0; //how many sightings for specific county
          const color = getColor(count); //apply color
          return (
            <CountyItem //component
              key={county}
              name={county}//prop passed
              count={count}//prop passed
              color={color}//prop passed
            />
          );
        })}
      </div>
    </section>
  );
}
export default MapPage;
