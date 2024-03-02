import RestrurentCard from "./RestrurentCard";
import resList from "./util/resList";
import { useState, useEffect } from "react";
import ShimerUi from "./shimerui";

const Body = () => {
  const [listOfRestrurent, setReslist] = useState([]);

const [filteredRestrurent, setFilteredReslist] = useState([])

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchDeta();
  }, []);

  const fetchDeta = async () => {
    const deta = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await deta.json();

    console.log(json);

    setReslist(
      json.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
    );
 setFilteredReslist(
  json.data.cards[1].card.card.gridElements.infoWithStyle
        .restaurants
 );

  };
  if (listOfRestrurent.length === 0) {
    return <ShimerUi />;
  }

  return (
    <div className="body">
      <div className="filtered-btn">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestrurent = listOfRestrurent.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())) 

              setFilteredReslist(filteredRestrurent)
            }
            }
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestrurent.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredReslist(filteredList);
          }}
        >
          Top restro
        </button>
      </div>

      <div className="rescontainer">
        {filteredRestrurent.map((restrurent) => (
          <RestrurentCard key={restrurent.info.id} resDeta={restrurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
