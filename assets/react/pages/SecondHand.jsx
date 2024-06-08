import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Car from '../components/Car';
import CarForm from '../components/CarForm';


export default function SecondHand() {
    // state (état, données)
    const [cars, setCars] = useState([
        { id: 1, name: 'Audi', km: 13000, year: 2019, price: 18000},
        { id: 2, name: 'Mercedes', km: 8000, year: 2021, price: 25000},
        { id: 3, name: 'Citroen C5', km: 20000, year: 2017, price: 10000}
    ])


    
    // comportements

    const handleDelete = (id) => {
        //1. copie du state
        const carsCopy = [...cars];

        //2. manipuler la copie du state
        const carsCopyUpdated = carsCopy.filter(car => car.id !== id);

        //3. modifier le state avec le setter
        setCars(carsCopyUpdated);
    }

    const handleAdd = (carToAdd) => {
        //copie du state
        const carsCopy = [...cars];
        //manipulation sur la copie du state
        carsCopy.push(carToAdd); // carsCopy.push({id: id, name: name});
        //3. modifier le state avec le setter
        setCars(carsCopy);
    }

    // affichage (render)
    return (
        <>
        <Header/>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>OCCASIONS</h1>
                    <div className='hero-banner-infos'>
                        <p>
                            <b>Adresse : </b>
                            <br />
                            15 rue Beethoven, 76000, Toulouse
                        </p>
                        <p>
                            <b>Horaires d'ouverture : </b>
                            <br />
                            Lundi à vendredi : 8h45 - 12h00, 14h00 - 18h00.
                            <br />
                            Samedi : 8h45 - 12h00
                            <br />
                            Dimanche : Fermé
                        </p>
                    </div>
                    <button className='btn-contact'><a href="#contact">Nous contacter</a></button>
                </div>
            </div>
            <h2>Découvrez nos voitures d'occasions</h2>
            <CarForm handleAdd={handleAdd}/>
            
            <section className='filter-container'>
                <select name="filter" id="filter">
                    <option value=""></option>
                    <option value="">Prix</option>
                    <option value="">Années</option>
                    <option value="">Km</option>
                </select>
            </section>

            <section className='cards-container'>
                {cars.length === 0 ? (
                        <p>Il n'y a aucune voiture en vente pour le moment.</p>
                    ) : (
                    cars.map((car)=>(
                        <Car key={car.id} carInfo={car} onClick={()=>handleDelete(car.id)}/>
                    ))
                )}       
            </section>
        </main>
        <Footer/>
        </>
    );
}

//Gestion du formulaire
//1. création du formulaire
//2. soumission du formulaire
//3. collecte des données du formulaire
//3a. méthode 1: documentGetElementById "React"
//3b. méthode 2: sync descendante / ascendante