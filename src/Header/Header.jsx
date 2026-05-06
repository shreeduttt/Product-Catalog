import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({title}) => {
    const navigate = useNavigate();
return (
<div className="header-container">
    <></>
    <h1>{title}</h1>
    <button className="back-button" onClick={() => navigate("/dashboard")}>Dashboard</button>
</div>
)
}

export default Header;