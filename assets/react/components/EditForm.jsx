import React, { useState } from "react";

export default function EditForm({car, handleUpdate, handleCancel}) {
    //state
    const [name, setName] = useState(car.name);
    const [km, setKm] = useState(car.km);
    const [year, setYear] = useState(car.year);
    const [price, setPrice] = useState(car.price);

    //comportement

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdate({ ...car, name, km, year, price });
    }

    //affichage (render)
    return(
        <>
            <form action="submit" onSubmit={handleSubmit} >
                <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"/>
                <input  value={km} onChange={(e)=>{setKm(e.target.value)}}  type="number" />
                <input value={year} onChange={(e)=>{setYear(e.target.value)}} type="number" />
                <input  value={price} onChange={(e)=>{setPrice(e.target.value)}} type="number" />
                <button type="submit">Mettre à jour</button>
                <button type="button" onClick={handleCancel}>Annuler</button>
            </form>
        </>
    );
}