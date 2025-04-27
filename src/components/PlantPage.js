import React from "react";
import PlantList from "./PlantList";

function PlantPage({ plants }) {
  return (
    <main>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;