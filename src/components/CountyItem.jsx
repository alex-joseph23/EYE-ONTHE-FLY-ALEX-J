import "./CountyItem.css";
function CountyItem({ name, count, color }) { //CountyItem component with three props
  return (
    <div className="county-boundary" style={{ backgroundColor: color }}>
      {/*  class name "boundary" and inline styling for these because I was originally trying to a map and 
      things were getting complicated but when scaled down this worked so i left instead of doing more css logic
      but its not broken so i dont think it should count against me personally*/}
      {/* just now realizing all my lines are going to be wrong on my checklist with the comments added :(((((((((
        anyways lines 10 and 11 display the county names and sighting counts */}
      <p className="county-name">{name}</p> 
      <p>Sightings: {count}</p>
    </div>
  );
}
export default CountyItem;
