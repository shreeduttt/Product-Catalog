import './Loader.css';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [opacities, setOpacities] = useState([1, 0.875, 0.75, 0.625, 0.5, 0.375, 0.25, 0.125]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacities(prev => [...prev.slice(1), prev[0]]);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loader-container">
        <div className="loader-item-1" style={{ opacity: opacities[7] }}></div>
        <div className="loader-item-2" style={{ opacity: opacities[6] }}></div>
        <div className="loader-item-3" style={{ opacity: opacities[5] }}></div>
        <div className="loader-item-4" style={{ opacity: opacities[4] }}></div>
        <div className="loader-item-5" style={{ opacity: opacities[3] }}></div>
        <div className="loader-item-6" style={{ opacity: opacities[2] }}></div>
        <div className="loader-item-7" style={{ opacity: opacities[1] }}></div>
        <div className="loader-item-8" style={{ opacity: opacities[0] }}></div>
    </div>
  )
}

export default Loader;