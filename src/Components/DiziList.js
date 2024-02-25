import React, {useState} from "react";
import dataDizi from "../DB/data";
import DiziCards from "./DiziCards";
const DiziList = ({valueTitle ,  setgetDatafrom}) => {
  const [dataDiziState, setdataDiziState] = useState(dataDizi);
  return (
    <>
    <div className="allCards">
      {dataDizi.filter((dizi)=>dizi.title.toLocaleLowerCase().includes(valueTitle.toLocaleLowerCase())).map((dizi) => (
        <DiziCards key={dizi.id} dizi= {dizi} />
      ))}
    </div>
    </>
  );
};

export default DiziList;
