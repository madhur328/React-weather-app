import './CardContainer.css'
import card_mumbai from '../img/card_mumbai.png'
import card_jaipur from '../img/card_jaipur.jpg'
import card_delhi from "../img/card_delhi.jpg"
import card_agra from "../img/card_agra.PNG"
import card_hyderabad from "../img/card_hyderabad.png"
import sun_icon from "../icons/Sun.svg"
import rain_icon from "../icons/Rain.svg"
import sun_cloud_icon from "../icons/Sun-Cloud.svg"
import cloud_icon from "../icons/Cloud.svg"

const CardContainer = () => (
        <div className="card-container">
            <div className="card card1">
                <h4>Mumbai</h4>
                <h6>India</h6>
                <img src={card_mumbai} alt="card" className="card-img" />
                <div className="weather-info">
                <div data-tooltip="Sunny">
                    <img src={sun_icon} alt="" className="wicon" />
                </div>

                <span className="wtext">16°C <span className="wtext-inner"> - </span> 28°C</span>
                </div>
            </div>

            <div className="card card2">
                <h4>Jaipur</h4>
                <h6>India</h6>
                <img src={card_jaipur} alt="card" className="card-img" />
                <div className="weather-info">
                <div data-tooltip="Rainy">
                    <img src={rain_icon} alt="" className="wicon" />
                </div>
                <span className="wtext">8°C <span className="wtext-inner"> - </span> 23°C</span>
                </div>
            </div>

            <div className="card card3">
                <h4>Delhi</h4>
                <h6>India</h6>
                <img src={card_delhi} alt="card" className="card-img" />
                <div className="weather-info">
                <div data-tooltip="Partly Sunny">
                    <img src={sun_cloud_icon} alt="" className="wicon" />
                </div>
                <span className="wtext">6°C <span className="wtext-inner"> - </span> 21°C</span>
                </div>
            </div>

            <div className="card card4">
                <h4>Agra</h4>
                <h6>India</h6>
                <img src={card_agra} alt="card" className="card-img" />
                <div className="weather-info">
                <div data-tooltip="Rainy">
                    <img src={rain_icon} alt="" className="wicon" />
                </div>
                <span className="wtext">10°C <span className="wtext-inner"> - </span> 29°C</span>
                </div>
            </div>

            <div className="card card5">
                <h4>Hyderabad</h4>
                <h6>India</h6>
                <img src={card_hyderabad} alt="card" className="card-img" />
                <div className="weather-info">
                <div data-tooltip="Cloudy">
                    <img src={cloud_icon} alt="" className="wicon" />
                </div>
                <span className="wtext">18°C <span className="wtext-inner"> - </span> 26°C</span>
                </div>
            </div>
        </div>
);

export default CardContainer;