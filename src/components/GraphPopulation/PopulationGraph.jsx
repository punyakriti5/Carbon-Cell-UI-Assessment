import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

import "./PopulationGraph.css";

function PopulationGraph() {
  const [populationData, setPopulationData] = useState([]);

  useEffect(() => {
    const fetchPopulation = async () => {
      try {
        let response = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        let { data } = await response.json();
        setPopulationData([...data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchPopulation();
  }, []);

  const options = {
    title: {
      text: "Population Graph of United States over the years",
    },
    chart: {
      type: "bar",
      
    },
    xaxis: {
      categories: populationData.map((item) => item.Year),
      title: {
        text: "Year",
      },
    },
    yaxis: {
      title: {
        text: "Population",
      },
    },
  };

  const series = [
    {
      name: "Population",
      data: populationData.map((item) => item.Population),
    },
  ];

  return (
    <>
    <div className="graph">
      <h2>Population Bar Graph</h2>
      {populationData.length > 0 ? (
        <Chart options={options} series={series} type="bar" height={400} width={840}/>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </>
  );
}
export default PopulationGraph;
