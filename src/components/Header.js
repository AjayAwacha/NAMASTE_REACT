import { LOGO_IMG } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;