import './WeatherReports.css'
import CardContainer from './CardContainer.js'
import slider_icon from "../icons/slider.png"

const WeatherReports = () => (
    <div className="wr_section1">
        <div className="report-title">
            <h2>Weather Reports</h2>
            <img src={slider_icon} alt="slider icon" className="icon" />
        </div>
        <CardContainer />
    </div>
);

export default WeatherReports