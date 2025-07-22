import CountyItem from "../components/CountyItem";
import "./MapPage.css"
function MapPage({ sightingsByCounty }) {
  const counties = ["Atlantic County", "Bergen County", "Burlington County", "Camden County",
    "Cape May County", "Cumberland County", "Essex County", "Gloucester County",
    "Hudson County", "Hunterdon County", "Mercer County", "Middlesex County",
    "Monmouth County", "Morris County", "Ocean County", "Passaic County",
    "Salem County", "Somerset County", "Sussex County", "Union County", "Warren County"
  ];
  function getColor(count) { if (!count)return "#eeeeee";
    if(count < 3) return "#ffcccc";
    if (count < 10) return "#ff8888";
    return "#ff0000"
  }
  return (
    <section>
      <h1>Spotted LanternFly Sightings In New Jersey By County</h1>
      <div className="county-lines"> {counties.map((county) => {
        const count = sightingsByCounty[county] || 0;
        const color = getColor(count);
        return (
        <CountyItem
        key={county}
        name={county}
        count={count}
        color={color} />
        );
      })}
        </div>
    </section>);
} export default MapPage;
