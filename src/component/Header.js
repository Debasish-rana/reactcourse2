import { LOGO_URL } from "./util/urls";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div className="list-item">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Cart</li>
          <li>Foods</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
