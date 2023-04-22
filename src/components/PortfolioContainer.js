import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, handleClick}) {

  const purchasedStock= stocks.map((stock) => {
    return <Stock stock={stock} key={stock.id} handleClick={handleClick}/>
  })


  return (
    <div>
      <h2>My Portfolio</h2>
      {purchasedStock}
    </div>
  );
}

export default PortfolioContainer;
