import { useCallback, useEffect, useRef, useState } from "react";
import "./styles.css";
import DetailsModal from "../Modal/DetailsModal";
import Header from "../Header/Header";
export default function SearchApp() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  const newFunction = useCallback(debounce((searchItem, data, setFilteredData) => {handleOnEnter(searchItem, data, setFilteredData)}, 300), []);


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
      <Header title="Search bar with Debouncing"/>
      <input className="input" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} onKeyUp={(e) => newFunction(searchItem, data,setFilteredData)}/>
      <div className="list-div">
      {filteredData.map((product) => (<div className="list-item" onClick={(e) => handleOnClick(product,e)} key={product.id}>{product.title}</div>))}
      </div>   
      {showModal && <DetailsModal product={product}/>}
    </div>
  );
}
