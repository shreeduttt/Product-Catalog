import { useNavigate } from 'react-router-dom';
import './LandingPage.css'
import Loader from '../Loader/Loader';

const LandingPage = ({}) => {
    const navigate = useNavigate();
return (
    <div className='dashboard-container'>
        <h1>
            Topics Dashboard
        </h1>
        <div className='topics-grid'>
        <button onClick={() => navigate("/search-app")}>Search Application</button>
        <button onClick={() => navigate("/drag-n-drop")}>Task Drag and Drop </button>
        <button onClick={() => navigate("/rating-n-heatmap")}>Star Ratings and Heatmap </button>
        <button onClick={() => navigate("/interest-tabs")}>Person's Interest Tab </button>
        
        </div>
        
    </div> 
)
}

export default LandingPage;