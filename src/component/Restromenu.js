import { useEffect, useState } from "react";
import ShimerUi from "./shimerui";
import { MENU_URL } from "../util/urls";
import { useParams } from "react-router-dom";
import useRestrurentMenu from "../util/useRestroMenuHook";
const Restromenu = () => {
  
  const [expand, setExpand] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="40"
      viewBox="0 -960 960 960"
      width="40"
    >
      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
    //"Expand More"
  );

  const { resId } = useParams();

  const restroInfo = useRestrurentMenu(resId)

  if (restroInfo === null) return <ShimerUi />;

  const {
    name,
    cuisines,
    locality,
    costForTwo, 
    avgRating,
    totalRatingsString,
  } = restroInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  console.log(itemCards);

  const { title } =
    restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

      //const { title } =
   // restroInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
     // ?.card;

  const { infoWithStyle } = restroInfo.cards[1].card.card.gridElements;
  return (
    <div className="res-info">
      <div className="menu-container">
        <div className="menu">
          <h1>{name}</h1>
          <li>{cuisines}</li>
          <li>{locality}</li>
          <li>{costForTwo / 100} For two</li>
        </div>
        <div className="rating">
          <span>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/001/189/165/small/star.png" />
          </span>
          <li>{avgRating}</li>
          <li className="total-Rating">{totalRatingsString}</li>
        </div>
      </div>
      <div className="offers">
        <div className="first-offer off">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart" />
          <p>{infoWithStyle.offers[0].info.header}</p>
        </div>
        <div className="second-offer off">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/483c8215-9e33-408d-9820-d404f89a9c45_ICICI.png" />
          <p>{infoWithStyle.offers[1].info.header}</p>
        </div>
        <div className="third-offer off">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/e7df7752-4f92-4fbd-ac70-022c42d718d5_RuPay.png" />
          <p>{infoWithStyle.offers[2].info.header}</p>
        </div>
        <div className="second-offer off">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/312fbf04-dafc-41e0-a06d-3ef2e3955703_Citi.png" />
          <p>{infoWithStyle.offers[3].info.header}</p>
        </div>
      </div>
      <div className="food-card">
        <span>
          <h1>{title}</h1>
          <button
            className="expand-btn"
            onClick={() => {
              //expand === "Expand More"? setExpand("Expand Less"):setExpand("Expand More");
              expand ===
              (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 -960 960 960"
                  width="40"
                >
                  <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
              )
                ? setExpand(
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      viewBox="0 -960 960 960"
                      width="40"
                    >
                      <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
                    </svg>
                  )
                : setExpand(
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40"
                      viewBox="0 -960 960 960"
                      width="40"
                    >
                      <path d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z" />
                    </svg>
                  );
            }}
          >
            {expand}
          </button>
        </span>

        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {<img src={MENU_URL + item.card.info.imageId} />}
              Name - {item.card.info.name}
              <p>Rs - {item.card.info.price / 100}</p>
              <button>ADD</button>
            </li>
          ))}
        </ul>
      </div>
      <div>

      </div>
    </div>
  );
};
export default Restromenu;
