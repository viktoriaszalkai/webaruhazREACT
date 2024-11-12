
import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  const [katLista, setKatLista] = useState([]);
  /* axiosszal aszinkron módon GET kérést indítunk a végpont felé */

  const getAdat = async (vegpont, callBackVf) => {
    try {
      const response = await myAxios.get(vegpont);
      console.log("adat: ", response.data);
      callBackVf(response.data);
    } catch (err) {
      console.log("Hiba történt az adat elküldésekor", err);
    } finally {
    }
  };
  

  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont, adat);
      console.log("adat: ", response.data);
    
    } catch (err) {
      console.log("Hiba történt az adat elküldésekor", err);
    } finally {
    }
  };


  /* useEffect hook segítségével hívjuk meg az aszinkron get kéréseket aszinkron hívások esetén ne végtelen sokszor fusson le a kérés, hanem csak akkor, ha a függőségi listában változás türténik*/
  useEffect(() => {
    getAdat("/products", setTermekLista);
    getAdat("/products/categories", setKatLista);
  }, []);

  return (
    <ApiContext.Provider value={{ termekLista, katLista, postAdat}}>
      {children}
    </ApiContext.Provider>
  );
};
