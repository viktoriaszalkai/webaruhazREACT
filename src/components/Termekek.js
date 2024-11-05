import React, { useContext } from "react";
import Termek from "./Termek";
import { ApiContext } from "../contexts/ApiContext";

function Termekek() {
  const { termekLista } = useContext(ApiContext);
  return (
    <div>
      {termekLista.map((elem, index) => {
        return <Termek adat={elem} key={index} index={index} />;
      })}
    </div>
  );
}

export default Termekek;
