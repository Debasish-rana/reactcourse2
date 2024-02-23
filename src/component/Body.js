import RestrurentCard from "./RestrurentCard";
import resList from "./util/resList";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestrurent, setReslist] = useState( resList );

  useEffect(() => {
    fetchDeta();
  }, []);

  const fetchDeta = async () => {
    const deta = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=13.0826802&lng=80.2707184"
    );

    const json = await deta.json();

    console.log(json);

    setReslist(json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants);


  };


  return (
    <div className="body">
      <div className="filtered-btn">
        <button
          onClick={() => {
            const filteredList = listOfRestrurent.filter(
              (res) => res.info.avgRating > 4.5
            );
            setReslist(filteredList)
          }}
        >
          Top retro
        </button>
      </div>

      <div className="rescontainer">
        {listOfRestrurent.map((restrurent) => (
          <RestrurentCard key={restrurent.info.id} resDeta={restrurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
