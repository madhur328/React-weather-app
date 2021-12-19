import './Header.css'
import bellIcon from '../icons/bell-regular.svg'
import userIcon from "../icons/user-regular.svg"
import settingsIcon from "../icons/setting.svg"

const Header = () => (
    <div className="h_nav-bar">
        <div className="user-tray">
            <ul>
                <li><img className="icon" src={bellIcon} alt="bell icon" /></li>
                <li><img src={userIcon} alt="user icon" className="icon" /></li>
                <li><img src={settingsIcon} alt="setting-cog" className="icon" /></li>
            </ul>
        </div>
    </div>
);

export default Header;