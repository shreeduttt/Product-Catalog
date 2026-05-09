import { useEffect, useState } from "react";

const MAX_LENGTH_OF_DESC = 95;

const RatingCard = ({title, rating, description, price}) => {
    const [visibleDescription, setVisibleDescription] = useState("");
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        setVisibleDescription(description.slice(0, Math.min(description.length, MAX_LENGTH_OF_DESC)));
        setShowMore(description.length > MAX_LENGTH_OF_DESC);
    }, []);

    function handleOnShowMore() {
        setVisibleDescription(description);
        setShowMore(false);
    }

    return (
        <div className="rating-card" style={{backgroundColor: `rgb(229, ${50 + (129 * rating * 2/7)}, 77)`}}>
            <h3>{title}</h3>
            <div className="star-rating">
              {[1,2,3,4,5].map((value) => (
                 <span  className={value<rating ? "yellow-star" : "gray-star"} key={value}>★</span>
              ))}
            </div>
            <h4>{`Price: ${price}$ | Rating: ${rating}`}</h4>
            <p className="description">{visibleDescription} </p>
            {showMore && <p className="show-more" onClick={() => handleOnShowMore()}> show more..</p>}
        </div>
    )
}

export default RatingCard;