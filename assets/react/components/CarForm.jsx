import React, { useState } from "react";

export default function CarForm({handleAdd}) {
    //state
    const [newCar, setNewCar] = useState("");
    const [newKm, setNewKm] = useState(null);
    const [newYear, setNewYear] = useState(null);
    const [newPrice, setNewPrice] = useState(null);
    //comportements
    
    const handleSubmit = (event) => {
        event.preventDefault()
        //1. copie du state
        
        //2. manipulation de la copie du state
        // const id = new Date().getTime();
        const name = newCar;
        const km = newKm;
        const year = newYear;
        const price = newPrice;
        const carToAdd = {name, km, year, price};

        //3. modifier le state avec le setter
        handleAdd(carToAdd)
        setNewCar("");
    }

    const handleChangeName = (event) => {
        setNewCar(event.target.value) 
    }
    const handleChangeKm = (event) => {
        setNewKm(event.target.value) 
    }
    const handleChangeYear = (event) => {
        setNewYear(event.target.value) 
    }
    const handleChangePrice = (event) => {
        setNewPrice(event.target.value) 
    }
    //affichage (render)
    return(
        <>
            <form className="form-add" action="submit" onSubmit={handleSubmit}>
                <input value={newCar} onChange={handleChangeName} type="text" placeholder='Ajouter le nom ici' required/>
                <input  value={newKm} onChange={handleChangeKm} type="number" placeholder='Ajouter le nombre de km ici' required/>
                <input value={newYear} onChange={handleChangeYear} type="number" placeholder="Ajouter l'année ici" required/>
                <input  value={newPrice} onChange={handleChangePrice} type="number" placeholder='Ajouter le prix ici' required/>
                <button>Ajouter</button>
            </form>
        </>
    );
}