import Header from "./Components/Header";
import Filters from "./Components/Filters";
import PropertiesList from "./Components/PropertiesList";
import { createContext, useState } from "react";
import { Data } from "./Data";
import Footer from "./Components/Footer";

export const DataContext = createContext();

function App() {
  const [favProperty, setFavProperty] = useState([]);
  const [filter , setFilter] = useState({
   city : "",
   date : "",
   price: "",
   type : ""
  });

  const [filtered, setFiltered] = useState(Data);
  const [showLiked , setShowLiked] = useState(false);

  

  return (
    <>
      <DataContext value={{favProperty,showLiked,setShowLiked,setFiltered,filtered,filter , setFilter, setFavProperty}}>
        <Header />
        <Filters />
        <PropertiesList />
        <Footer />
      </DataContext>
    </>
  );
}

export default App;
