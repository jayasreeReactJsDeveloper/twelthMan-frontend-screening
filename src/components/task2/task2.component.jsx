import { useEffect, useState } from 'react'
import { TfiSearch } from 'react-icons/tfi'
import "../../common.styles.css";
import "./task2.style.css";
import { products } from './products';

function Task2() {
  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filterKey, setFilterKey] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const handleFilterKey = (event) => {
    setFilterKey(event.target.value);
  }

  const handleSearchProductsByValue = () => {
    const filtered = products.filter(each=>
      each.name
      .toLowerCase()
      .includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  const handlePriceKey = (event) => {
    const min = event.target.min;
    const max = event.target.max;
    const filtered = products.filter(each=>{
      return each.price > min && each.price < max
    })
    setFilteredProducts(filtered);
  }

  useEffect(()=>{
    const filtered = filterKey==="All" ? products : products.filter(each=>each.category===filterKey);
    setFilteredProducts(filtered);
  },[filterKey])

  useEffect(()=>{
    const filterItems = products
      .map(eachProduct=>eachProduct.category)
      .filter((item,index,arr)=>index===arr.indexOf(item));
    setFilters(filterItems);
    setFilteredProducts(products);
  },[])

  return (
    <div className="task2-container">
      <div className="filters-section">
        <div className="search-input-container flex">
          <input 
            className='search-input'
            type="text" 
            placeholder="Enter Product Name to Search...." 
            onChange={handleSearchValue}
          />
          <TfiSearch onClick={handleSearchProductsByValue}/>
        </div>
        <hr/>
        <div className="flex flex-wrap g-1">
          <div className='flex' key="All">
            <input 
                className='radio-input'
                type="radio" 
                value="All" 
                name="filter"
                onChange={handleFilterKey}
              />
              <p>All</p>
          </div>
          {
            filters && filters.map(eachFilter=>
              <div className='flex'  key={eachFilter} >
                <input 
                    className='radio-input'
                    type="radio" 
                    value={eachFilter} 
                    name="filter"
                    onChange={handleFilterKey}
                  />
                  <p> {eachFilter}</p>
              </div>
            )
          }
        </div>
        <hr/>
        <div className="flex flex-column">
          <p>Price Range</p>
          <div>
          <input className="radio-input" type="radio" value="100" min={0} max={100} name="priceFilter" onChange={handlePriceKey}/>
          <span>0-100</span>
          </div>
          <div>
          <input className="radio-input" type="radio" value="100" min={100} max={500} name="priceFilter" onChange={handlePriceKey}/>
          <span>100-500</span>
          </div>
          <div>
          <input className="radio-input" type="radio" value="500" min={500} max={1000} name="priceFilter" onChange={handlePriceKey}/>
          <span>500-1000</span>
          </div>
        </div>
      </div>
      <ul className="products-list flex flex-wrap g-2vw justify-start m-y">
        {
          filteredProducts && filteredProducts.map((eachProduct,productIndex)=>{
            const {name,price,category,available} = eachProduct;
            return <li key={productIndex} className="product-container flex flex-column">
              <p>{name}</p>
              <p>{price}</p>
              <p>{category}</p>
              <p>{available}</p>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Task2
