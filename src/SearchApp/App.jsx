import { useEffect, useRef, useState } from "react";
import "./styles.css";
import DetailsModal from "../Modal/DetailsModal";

export default function App() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  const newFunction = useRef(null);
  const fetchData = async() => {
     const data = await fetch("https://dummyjson.com/products?limit=100");
     const json = await data.json();
     console.log(json);
     setData(json.products);
     setFilteredData(json.products);
  }
  useEffect(() => {
    console.log("hey");
    fetchData();
    newFunction.current = debounce(handleOnEnter, 300)
  },[]);
  
  function debounce(fn, d) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          fn(...args)
        }, d)
    }
  }

  function handleOnEnter(searchItem, data,setFilteredData ) {
     
      const filtered = data.filter((item) => 
       ( item.title.includes(searchItem))
        )
      setFilteredData(filtered)
      console.log("debounce bhai", searchItem, filtered, data );
  }

  function handleOnClick(product, e) {
    setProduct(product);
    setShowModal(true);
    e.stopPropagation();
  }

  return (
    <div className="App" onClick={() => setShowModal(false)}>
      <h1>Search bar with Debouncing</h1>
      <input className="input" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} onKeyUp={(e) => newFunction.current(searchItem, data,setFilteredData)}/>
      <div className="list-div">
      {filteredData.map((product) => (<div className="list-item" onClick={(e) => handleOnClick(product,e)} key={product.id}>{product.title}</div>))}
      </div>   
      {showModal && <DetailsModal product={product}/>}
    </div>
  );
}
