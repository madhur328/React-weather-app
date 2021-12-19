import './Header.css'
import bellIcon from '../icons/bell-regular.svg'
import userIcon from "../icons/user-regular.svg"
import settingsIcon from "../icons/setting.svg"
import Login from './Login'
import Logout from './Logout'
import { Modal } from './Modal';
import { useState } from 'react';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loggedUser, set_loggedUser] = useState(null)
    
    return (
        <>
            {isModalOpen ?
                <Modal onClose={() => setIsModalOpen(false)}>
                    {loggedUser ?
                        <Logout currentUser={set_loggedUser}/>
                    :   <Login currentUser={set_loggedUser}/>
                    }
                </Modal>
                :
                null
            }
            <div className="h_nav-bar">
                <div className="user-tray">
                    <ul>
                        <li><img className="icon" src={bellIcon} alt="bell icon" /></li>
                        {loggedUser ? loggedUser.imageUrl ? 
                          <li onClick={() => {setIsModalOpen(true)}}><img src={loggedUser.imageUrl} alt="user icon" className="loggedUser" /></li>
                        : <li onClick={() => {setIsModalOpen(true)}}><img src={userIcon} alt="user icon" className="icon" /></li>
                        : <li onClick={() => {setIsModalOpen(true)}}><img src={userIcon} alt="user icon" className="icon" /></li>
                        }
                        <li><img src={settingsIcon} alt="setting-cog" className="icon" /></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header;