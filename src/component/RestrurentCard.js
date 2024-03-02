import { CDN_URL } from "./util/urls";
const RestrurentCard = (props) => {
  const { resDeta } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    locality,
    costForTwo,
    sla,
  } = resDeta?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="image" src={CDN_URL + cloudinaryImageId} />

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}Star</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo} Cost For Two</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestrurentCard;
