import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StockSearchBar from './StockSearchBar'
import {StockContext} from './StockContext'
import TradingViewWidget from 'react-tradingview-widget';
import {Helmet} from "react-helmet";


const Stocks = props => {
    
    const [stocks, addStock] = useState([])

    const [stock] = useContext(StockContext)


    useEffect (() => {
        console.log("Axios call")
        axios.get(`https://finnhub.io/api/v1/quote?symbol=${stock}&token=bu247pn48v6uohspt4jg`)
        .then(res => console.log(res.data.c))
      })

      useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
        script.async = true;
        script.innerHTML = JSON.stringify({
            "colorTheme": "light",
            "dateRange": "12M",
            "showChart": true,
            "locale": "en",
            "largeChartUrl": "",
            "isTransparent": false,
            "showSymbolLogo": true,
            "width": "400",
            "height": "660",
            "plotLineColorGrowing": "rgba(33, 150, 243, 1)",
            "plotLineColorFalling": "rgba(33, 150, 243, 1)",
            "gridLineColor": "rgba(240, 243, 250, 1)",
            "scaleFontColor": "rgba(120, 123, 134, 1)",
            "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
            "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
            "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
            "tabs": [
              {
                "title": "Indices",
                "symbols": [
                  {
                    "s": "FOREXCOM:SPXUSD",
                    "d": "S&P 500"
                  },
                  {
                    "s": "FOREXCOM:NSXUSD",
                    "d": "Nasdaq 100"
                  },
                  {
                    "s": "FOREXCOM:DJI",
                    "d": "Dow 30"
                  },
                  {
                    "s": "INDEX:NKY",
                    "d": "Nikkei 225"
                  },
                  {
                    "s": "INDEX:DEU30",
                    "d": "DAX Index"
                  },
                  {
                    "s": "FOREXCOM:UKXGBP",
                    "d": "FTSE 100"
                  }
                ],
                "originalTitle": "Indices"
              },
              {
                "title": "Commodities",
                "symbols": [
                  {
                    "s": "CME_MINI:ES1!",
                    "d": "S&P 500"
                  },
                  {
                    "s": "CME:6E1!",
                    "d": "Euro"
                  },
                  {
                    "s": "COMEX:GC1!",
                    "d": "Gold"
                  },
                  {
                    "s": "NYMEX:CL1!",
                    "d": "Crude Oil"
                  },
                  {
                    "s": "NYMEX:NG1!",
                    "d": "Natural Gas"
                  },
                  {
                    "s": "CBOT:ZC1!",
                    "d": "Corn"
                  }
                ],
                "originalTitle": "Commodities"
              },
              {
                "title": "Bonds",
                "symbols": [
                  {
                    "s": "CME:GE1!",
                    "d": "Eurodollar"
                  },
                  {
                    "s": "CBOT:ZB1!",
                    "d": "T-Bond"
                  },
                  {
                    "s": "CBOT:UB1!",
                    "d": "Ultra T-Bond"
                  },
                  {
                    "s": "EUREX:FGBL1!",
                    "d": "Euro Bund"
                  },
                  {
                    "s": "EUREX:FBTP1!",
                    "d": "Euro BTP"
                  },
                  {
                    "s": "EUREX:FGBM1!",
                    "d": "Euro BOBL"
                  }
                ],
                "originalTitle": "Bonds"
              },
              {
                "title": "Forex",
                "symbols": [
                  {
                    "s": "FX:EURUSD"
                  },
                  {
                    "s": "FX:GBPUSD"
                  },
                  {
                    "s": "FX:USDJPY"
                  },
                  {
                    "s": "FX:USDCHF"
                  },
                  {
                    "s": "FX:AUDUSD"
                  },
                  {
                    "s": "FX:USDCAD"
                  }
                ],
                "originalTitle": "Forex"
              }
            ]
          })
        document.getElementById("myContainer").appendChild(script);
    })


    return (
        <div>
        <StockSearchBar></StockSearchBar>
        <div id="myContainer">
        <div className="tradingview-widget-container">
           <div className="tradingview-widget-container__widget">
            </div>
        </div>
        </div>

        {/* <TradingViewWidget
        symbol={stock}
        locale="eng"
        width="1000"
        height="500"
        /> */}
        </div>
    )
}

export default Stocks
