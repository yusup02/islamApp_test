import { TranslationProvider, useTranslation } from "./TranslationContext";
import logo from "./images/logo.png";
import screen from "./images/screen.png";
import Schedule from "./images/Schedule.png";
import map from "./images/map.png";
import "./Mosque.css";
import Download from './Download';

const Mosque = () => {
  const { translate } = useTranslation();

  return (
    <div className="mosque-background">
      <main className="container">
        <div className="page-title">
          <img className="logo" src={logo} alt="" />
          <h1 className="mosque_islamApp">{translate("mosque_islamApp")} </h1>
          <p className="application">{translate("application")}</p>
          <a href="#">
          <Download />
          </a>

          <div>
            <img className="screen" src={screen} alt="" />
          </div>
        </div>

        <div className="bid">
          <div className="bid_title">
            <h2 className="times">{translate("times")}</h2>
            <p className="times_1">{translate("times_1")}</p>
            <a href="#">
              <button className="page-title_nstall">{translate("bid")}</button>
            </a>
          </div>

          
            <img className="map" src={map} alt="" />
        

          <p className="helped_text">{translate("Already helped")}</p>
          <div className="bid_helped">
            <p className="bid_helped_text">{translate("Samara region")}</p>
            <p className="bid_helped_text">{translate("Murmansk region")}</p>
            <p className="bid_helped_text">{translate("Sterlitamaksky district")}</p>
          </div>
        </div>

        <div className="Schedule">
        <h2 className="times">{translate("Monthly schedule")}</h2>
        <p className="times_1">{translate("Share")}</p>

        <img className="Schedule_img" src={Schedule} alt="" />
         
        </div>

        <div className="questions">
          <h2 className="times">{translate("questions")}</h2>
          <a href="#">
              <button className="page-title_nstall button">{translate("Contact us")}</button>
            </a>
        </div>
      </main>
    </div>
  );
};

export default Mosque;
