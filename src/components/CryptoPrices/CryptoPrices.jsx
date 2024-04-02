import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./CryptoPrices.css"
import { margin } from "@mui/system";

function CryptoPrices() {
  const [bitcoinData, setBitcoinData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const { bpi } = await response.json();
        setBitcoinData(bpi);
      } catch (err) {
        console.log("error", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Typography variant="h6" sx={{m:3}}>Cryptocurrency Prices</Typography>

      
        {Object.keys(bitcoinData).map(
          (currency) => (
            
            (
              <Card key={currency} className="crypto-card">
                <CardContent>
                  <Typography variant="h5" className="crypto-title">
                  
                    {bitcoinData[currency].description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="crypto-price">
                    {bitcoinData[currency].rate}
                  </Typography>
                </CardContent>
              </Card>
            )
          )
        )}
      
    </>
  );
}

export default CryptoPrices;
