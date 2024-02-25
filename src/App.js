import DiziList from "./Components/DiziList";
import "./App.css";
import Filter from "./Components/Filter";
import {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Dizi from "./Components/Dizi";
function App() {
  const [valueTitle, setvalueTitle] = useState("")
  const [getDatafrom, setgetDatafrom] = useState([])
  return (
<>
<Filter setvalueTitle={setvalueTitle} />
<Routes>
  <Route path="/" element= {<DiziList valueTitle={valueTitle}  setgetDatafrom={ setgetDatafrom} />} />
  <Route path="/:id" element= {<Dizi/>} />

</Routes>
</>
  );

}


export default App;
