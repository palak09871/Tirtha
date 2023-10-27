import "./TripStyles.css";
import { Link } from "react-router-dom";
function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <Link key="click-here" to={props.url}></Link>
    </div>
  );
}
export default TripData;
