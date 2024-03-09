import { useEffect, useState } from "react";
import ShimerUi from "./shimerui";
import { MENU_URL } from "./util/urls";
import { useParams } from "react-router-dom";
import { MENU_API } from "./util/urls";
const Restromenu = () => {
  const [restroInfo, setRestroInfo] = useState(null);

const {resId} = useParams()

  useEffect(() => {
    restroMenuDeta();
  }, []);

  const restroMenuDeta = async () => {
    const deta = await fetch(
      MENU_API + resId
    );

    const json = await deta.json();
    console.log(json);
    setRestroInfo(json.data);
  };
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
          <p>Flat ₹150 Off</p>
        </div>
        <div className="second-offer off">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/483c8215-9e33-408d-9820-d404f89a9c45_ICICI.png" />
          <p>Flat ₹50 Off</p>
        </div>
        <div className="third-offer off">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/e7df7752-4f92-4fbd-ac70-022c42d718d5_RuPay.png" />
          <p>20% Off Upto ₹100</p>
        </div>
        <div className="second-offer off">
          <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/312fbf04-dafc-41e0-a06d-3ef2e3955703_Citi.png" />
          <p>15% Off Upto ₹300</p>
        </div>
      </div>
      <div className="food-card">
        <ul>
          {itemCards.map((item) => (
             
            <li key={item.card.info.id}>
              {<img src={MENU_URL + item.card.info.imageId} />}
              Name - {item.card.info.name}
               <p>Rs - {item.card.info.price/100}</p>
               <button>ADD</button> 
            </li>
           
          ))}

          
        </ul>
      </div>
    </div>
  );
};
export default Restromenu;
