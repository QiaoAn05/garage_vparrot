import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CarTest from '../../images/car-test.jpg'

export default function SecondHand() {
    // state (état, données)
    const [cars, setCars] = useState([
        { id: 1, name: 'Audi', km: 13000, year: 2019, price: 18000},
        { id: 2, name: 'Mercedes', km: 8000, year: 2021, price: 25000},
        { id: 3, name: 'Citroen C5', km: 20000, year: 2017, price: 10000}
    ])

    const [newCar, setNewCar] = useState("");
    const [newKm, setNewKm] = useState(0);
    const [newYear, setNewYear] = useState(0);
    const [newPrice, setNewPrice] = useState(0);
    
    // comportements

    const handleDelete = (id) => {
        //1. copie du state
        const carsCopy = [...cars];

        //2. manipuler la copie du state
        const carsCopyUpdated = carsCopy.filter(car => car.id !== id);

        //3. modifier le state avec le setter
        setCars(carsCopyUpdated);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        //1. copie du state
        const carsCopy = [...cars];
        //2. manipulation de la copie du state
        const id = new Date().getTime();
        const name = newCar;
        const km = newKm;
        const year = newYear;
        const price = newPrice;
        // carsCopy.push({id: id, name: name});
        carsCopy.push({id, name, km, year, price});

        //3. modifier le state avec le setter
        setCars(carsCopy);
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
            <form action="submit" onSubmit={handleSubmit}>
                <input value={newCar} onChange={handleChangeName} type="text" placeholder='Ajouter le nom ici' />
                <input  value={newKm} onChange={handleChangeKm} type="number" placeholder='Ajouter le nombre de km ici' />
                <input value={newYear} onChange={handleChangeYear} type="number" placeholder="Ajouter l'année ici" />
                <input  value={newPrice} onChange={handleChangePrice} type="number" placeholder='Ajouter le prix ici' />
                <button>Ajouter</button>
            </form>
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
                        <div key={car.id} className='card'>
                            <img src={CarTest} alt="image de la card" />
                            <h3>{car.name}</h3>
                            <div className='card-infos'>
                                <div className='card-km'><h4>Km</h4><p>{car.km}</p></div>
                                <div className='card-price'><h4>€</h4><p>{car.price}</p></div>
                                <div className='card-year'><h4>Année</h4><p>{car.year}</p></div>
                            </div>
                            <p className='card-publishedAt'>Publié le 07/06/2024<span className='delUp-card'><button onClick={()=>handleDelete(car.id)}>X</button></span></p>
                            
                        </div>
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