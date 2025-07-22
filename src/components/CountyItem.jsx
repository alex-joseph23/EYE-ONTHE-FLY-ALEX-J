import "./CountyItem.css";
function CountyItem ({ name, count, color}) {
    return (<div className="county-boundary" style={{backgroundColor: color}}>
        <p className="county-name">{name}</p>
        <p>Sightings: {count}</p>
        </div>);
}
export default CountyItem;