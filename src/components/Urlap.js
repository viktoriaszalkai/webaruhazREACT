import React, { useContext, useState } from "react"
import { ApiContext } from "../contexts/ApiContext"

function Urlap(){

  const {postAdat,katLista} = useContext(ApiContext);
    //saját űrlapState
    const [adat, setAdat]=useState({
                                        title:'',
                                        price:10000,
                                        category:'',  //select option
                                        description:'', //textarea
                                        image:'', //file
                                    })
    
    function adatKuld(event){
        event.preventDefault()
        console.log("küldés", adat);
    }
    function valtozasKezeles(event){
        //itt frissítem a state értékét
        const sv={...adat}
        sv[event.target.id]=event.target.value
        setAdat({...sv})
    }

    return(
        <div>

          {/*  ^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű ]{2,}$  */}
            <form onSubmit={adatKuld}>
            <div className="mb-3">
            <label htmlFor="title" className="form-label">Termék neve</label>
            <input type="text" value={adat.title} onChange={valtozasKezeles} className="form-control" id="title" />
            </div>

            <div className="mb-3">
            <label htmlFor="price" className="form-label">Termék ára</label>
            <input type="number"  min= "10000" max= "1000000" value={adat.price} onChange={valtozasKezeles} className="form-control" id="price" />
            </div>

            <div className="mb-3">
            <label htmlFor="category" className="form-label">Termék kategóriája</label>
                <select className="form-select" id="category" onChange={valtozasKezeles} >
                <option> </option>
                {katLista.map((elem, key)=>{
                    return(<option value={elem} key={key}>{elem}</option>)
                })};
                </select>
            </div>

            {/* 0: "electronics"
                1 : "jewelery"
                2 : "men's clothing"
                3 : "women's clothing" */}

            <div className="mb-3">
            <label htmlFor="description" className="form-label">Termék leírása</label>
            <input type="textarea" value={adat.description} onChange={valtozasKezeles} className="form-control" id="description" />
            </div>

            <div className="mb-3">
            <label htmlFor="image" className="form-label">Termék kép</label>
            <input type="file" value={adat.image} onChange={valtozasKezeles} className="form-control" id="image" />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Urlap