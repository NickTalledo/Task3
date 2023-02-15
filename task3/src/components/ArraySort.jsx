import { useState, useEffect } from "react";
import products from "./Products";

const ArraySort = () =>{
    const [sortedProducts, setSortedProducts] = useState([]);
    const [direction, setDirection] = useState('asc');
    
    useEffect(()=> {
        setSortedProducts([...products]);
    }, [])
    
    const sortPrices = () => {
    
        if(direction === 'asc'){
            setSortedProducts(sortedProducts.sort((a,b) => b.price - a.price));
            setDirection('desc');
        }
        else{
            setSortedProducts(sortedProducts.sort((a,b) => a.price - b.price));
            setDirection('asc');
        }
    }
    return <div>
        <h3>Products: </h3>
        <p>{sortedProducts.map(products => `${products.name} - $${products.price}`).join(', ')}</p>
        <button onClick={sortPrices}>Resort</button><small>{direction}</small>
    </div>
}

export default ArraySort;