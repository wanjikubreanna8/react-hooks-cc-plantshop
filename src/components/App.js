import React,{ useState }from "react";
import { useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
const [ plants,setPlants ]=useState([]);
const [ searchTerm,setSearchTerm ] = useState('')

useEffect(()=>{
  fetch('http://localhost:6001/plants')
  .then((r)=>r.json())
  .then((data)=>{
    console.log("Fetched plants:", data);
    setPlants(data)
  })
},[]);

const handleAddPlant = (newPlant) => {
  setPlants([...plants,newPlant])
}

const filteredPlants = plants.filter(plant => 
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="app">
      <Header />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={setSearchTerm}/>
      <PlantPage plants={filteredPlants}/>
    </div>
  );
}

export default App;