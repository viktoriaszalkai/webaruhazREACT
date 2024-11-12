import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function TablazatSor(props) {
  return(
    <tr>
              <td scope="row">{props.elem.id}</td>
              <td >{props.elem.title}</td>
              <td >{props.elem.price}</td>
              <td >{props.elem.category}</td>
              <td >{props.elem.description}</td>
              <td ><img src={props.elem.image} alt={props.elem.image} height="100"></img></td>
              <td ><button type="button" className="btn btn-dark">Törlés</button></td>
    </tr>
  )
}

export default TablazatSor;
