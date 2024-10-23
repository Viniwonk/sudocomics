import "../../style/App.css";
import Marvel from "../../images/marvel.webp";
import DC from "../../images/dc.webp";
import Carousel01 from "../../images/carousel-1.webp";
import Tape from "../tape/tape";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div id="car_container">
      <div id="car_wrapper">
        <div className="car_XLsqr">
          <span>
            <img id="principal" src={Carousel01} alt="" />
          </span>
          <Link to="/Avengers" className="car_Links"></Link>
        </div>
        <div className="car_Ssqrs">
          <div className="car_Ssqr">
            <span>
              <img src={Marvel} alt="" />
            </span>
            <Link to="/editorapage/marvel" className="car_bannerLinkS"></Link>
          </div>
          <div className="car_Ssqr">
            <span>
              <img src={DC} alt="" />
            </span>
            <Link to="/editorapage/dc" className="car_bannerLinkS"></Link>
          </div>
        </div>
      </div>
      <Tape></Tape>
    </div>
  );
}
