import React, { createContext, useContext } from "react";
import TablazatSor from "./TablazatSor";
import { ApiContext } from "../contexts/ApiContext";

function Tablazat() {
  const { termekLista } = useContext(ApiContext);
  return (
    <table>
      <thead>
        <tr>
          <th scope="row">#</th>
          <th>Termék</th>
          <th>Ár</th>
          <th>Kategória</th>
          <th>Leírás</th>
          <th>Kép</th>
        </tr>
      </thead>
      <tbody>
        {termekLista.map((elem, index) => {
          return <TablazatSor elem={elem} key={index} />;
        })}
        ;
      </tbody>
    </table>
  );
}

export default Tablazat;
