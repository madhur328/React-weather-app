import './LeftPanel.css'
import appIcon from '../img/appIcon.PNG'
import homeIcon from '../icons/home.png'
import tachometerIcon from '../icons/tachometer.png'
import bugIcon from '../icons/bug.png'
import dashboardIcon from '../icons/dashboard.png'
import usersIcon from '../icons/users.png'
import calculatorIcon from '../icons/calculator.png'
import settingsIcon from '../icons/settings.png'

const LeftPanel = () => (
    <div className="lp_nav-panel">
        <div className="img-holder">
            <img className="appIcon" src={appIcon} alt="weather app icon" />
        </div>
        <ul>
            <li><img src={homeIcon} alt="home icon" className="icon" /></li>
            <li><img src={tachometerIcon} alt="tachometer icon" className="icon" /></li>
            <li><img src={bugIcon} alt="bug icon" className="icon" /></li>
            <li><img src={dashboardIcon} alt="dashboard icon" className="icon selected"/></li>
            <li><img src={usersIcon} alt="users icon" className="icon" /></li>
            <li><img src={calculatorIcon} alt="calculator icon" className="icon" /></li>
            <li><img src={settingsIcon} alt="settings icon" className="icon" /></li>
        </ul>
    </div>
)

export default LeftPanel;