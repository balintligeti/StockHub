import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StockSearchBar from './StockSearchBar'
import {StockContext} from './StockContext'
import TradingViewWidget from 'react-tradingview-widget';


const Stocks = props => {
    
    const [stocks, addStock] = useState([])

    const [stock] = useContext(StockContext)


    useEffect (() => {
        console.log("Axios call")
        axios.get(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bu247pn48v6uohspt4jg`)
        .then(res => console.log(res.data.c))
      })


    return (
        <div>
        <StockSearchBar></StockSearchBar>
        <TradingViewWidget
    symbol={stock}
    locale="eng"
    autosize
  />
        </div>
    )
}

export default Stocks