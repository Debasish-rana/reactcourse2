import { useEffect, useState } from "react";
import { MENU_API } from "./urls";
const useRestrurentMenu = (resId) => {
  const [restroInfo, setRestroInfo] = useState(null);

  useEffect(() => {
    fetchDeta();
  }, []);

  const fetchDeta = async () => {
    const deta = await fetch(MENU_API + resId);
    const json = await deta.json();
    console.log(json);
    setRestroInfo(json.data);
  };
  return restroInfo;
};

export default useRestrurentMenu;
