import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Car from '../components/Car';
import CarForm from '../components/CarForm';
import EditForm from '../components/EditForm';
import axios from 'axios';
import HeroBannerInfos from '../components/HeroBannerInfos';

export default function SecondHand() {
    // state (état, données)
    const [cars, setCars] = useState([])
    const [editingCar, setEditingCar] = useState(null);
    const [localS, setLocalS] = useState(null);

    // comportements

    useEffect(() => {
        axios.get('/cars/read')
            .then(response => {
                setCars(response.data);
                console.log(response);
            })
            .catch(error => {
                console.error('Error fetching cars:', error);
            });
    }, []);
    
  

    useEffect(() => {
        setLocalS(localStorage.getItem('token'));
    }, []);

    const handleDelete = (id) => {
        //1. copie du state
        const carsCopy = [...cars];

        //2. manipuler la copie du state
        const carsCopyUpdated = carsCopy.filter(car => car.id !== id);

        //3. modifier le state avec le setter
        setCars(carsCopyUpdated);
        setEditingCar(null);

        axios.delete(`/car/delete/${id}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error('Error deleting car:', error);
            });

    }

    const handleAdd = (carToAdd) => {
        //1. copie du state
        const carsCopy = [...cars];
        //2. manipulation sur la copie du state
        carsCopy.push(carToAdd); // carsCopy.push({id: id, name: name});
        //3. modifier le state avec le setter
        setCars(carsCopy);
        axios.post('/car/createOrUpdate', carToAdd)
        .then(response => {
          console.log(response.data);
        //   window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    }

    const updateCar = (carToUpdate) => {
        //1. copie du state
        const carsCopy = [...cars];
        //2. manipulation sur la copie du state
        const carsCopyUpdated = carsCopy.map((car) => car.id === carToUpdate.id ? carToUpdate : car);
        //3. modifier le state avec le setter
        setCars(carsCopyUpdated);
        setEditingCar(null);

        axios.post('/car/createOrUpdate', carToUpdate)
        .then(response => {
          console.log(response.data);
        //   window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    }

    // affichage (render)
    return (
        <>
        <Header/>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>OCCASIONS</h1>
                    <HeroBannerInfos/>
                    <button className='btn-contact'><a href="#contact">Nous contacter</a></button>
                </div>
            </div>
            <h2>Découvrez nos voitures d'occasions</h2>
            { localS && (
                <>
                {!editingCar && (
                <CarForm handleAdd={handleAdd}/>
            )}
            
            {editingCar && (
                <EditForm
                    car={editingCar}
                    handleUpdate={updateCar}
                    handleCancel={()=>{setEditingCar(null)}}
                />
            )}
            </>
            ) }
            
            
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
                        <Car localS={localS} key={car.id} carInfo={car} onClick={()=>handleDelete(car.id)} onEdit={()=>setEditingCar(car)}/>
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