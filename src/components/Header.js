import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";

const Header = () => {
    const [loginText, setLoginText] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_IMG} />
            </div>
            <div className="menu-item">
                <ul className="items">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Card</li>
                    <button className="login-btn" onClick={() => {
                        loginText === 'Login' ? setLoginText('Logout') : setLoginText('Login')
                    }}>{loginText}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;