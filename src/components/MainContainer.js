import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sortKey, setSortKey] = useState('')
  const [filterKey, setFilterKey] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
    .then(resp=> resp.json())
    .then(stocks => setStocks(stocks))
  }, [])

    const toggleSort = sortValue => {
      setSortKey(sortValue)
    }

   const buyStock = (stock) => {
    const updateMyPortfolio = [...myStocks, stock]
    setMyStocks(updateMyPortfolio)
   }

   const sellStock = (stock) => {
    const liquidatedPortfolio = [...myStocks].filter(myStock => myStock.id !== stock.id)
    setMyStocks(liquidatedPortfolio)
   }

    const filterList = filterValue => {
      setFilterKey(filterValue)
    }
  const filteredStocks = filterKey ? stocks.filter(stock => stock.type === filterKey) : stocks

  const sortedStocks = [...filteredStocks].sort((a,b) => {
    switch (sortKey){
      case 'Alphabetically':
        if (a.ticker < b.ticker) {
          return -1
        } else {
          return 1
        }
      case 'Price':
        return a.price - b.price 
      default: 
        return 0
      }
  })

  return (
    <div>
      <SearchBar toggleSort={toggleSort} filterList={filterList} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} handleClick={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={myStocks} handleClick={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
