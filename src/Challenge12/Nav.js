import "./Nav.css";
import barco from "../../assets/barco.png"
import dona from "../../assets/dona.png";
import pajarito from "../../assets/pagarito.png";

export const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <img src={barco} />
        <img src={dona} />
        <img src={pajarito} />
      </nav>
      <Logo></Logo>

     
    </div>
  );
};