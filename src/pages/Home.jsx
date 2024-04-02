import { Grid } from "@mui/material";
import React from "react";
import PopulationGraph from "../components/GraphPopulation/PopulationGraph";
import SideNavbar from "../components/SideNavbar/SideNavbar";

function Home() {
  return (
    <>
      <SideNavbar />
      <PopulationGraph />
    </>
  );
}

export default Home;
