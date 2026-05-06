import Header from '../Header/Header';
import './Heatmap.css';
import { useEffect, useState } from 'react';
import RatingCard from './RatingCard';

const ProductHeatmap = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async() => {
        const data = await fetch("https://dummyjson.com/products?limit=100");
        const json = await data.json();
        setProducts(json.products);
    }

    useEffect(() => {
       fetchData();
    }, [])

    return (
        <div className='heatmap-container'>
            <Header title="Product Ratings and Heatmap🔥"/>
            <div className='heatmap-grid'>
            {
                products.map((product) => (
                    <RatingCard 
                        key={product.id} 
                        title={product.title} 
                        rating={product.rating} 
                        price={product.price} 
                        description={product.description}
                    />
                ))
            }
            </div>
        </div>
    )
}

export default ProductHeatmap;