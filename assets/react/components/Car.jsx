import React from "react";
import CarTest from '../../images/car-test.jpg';

export default function Car({carInfo, onClick, onEdit}) {
    //state
    //comportement
    //affichage (render)
    return(
        <>
            <div className='card'>
                <img src={CarTest} alt="image de la card" />
                    <h3>{carInfo.name}</h3>
                    <div className='card-infos'>
                        <div className='card-km'><h4>Km</h4><p>{carInfo.km}</p></div>
                        <div className='card-price'><h4>€</h4><p>{carInfo.price}</p></div>
                        <div className='card-year'><h4>Année</h4><p>{carInfo.year}</p></div>
                    </div>
                    <p className='card-publishedAt'>
                        Publié le 07/06/2024
                        <span className='delUp-card'>
                            <button className="btn-update" onClick={onEdit}>Edit</button>
                            <button className="btn-delete" onClick={onClick}>X</button>
                        </span>
                    </p>                            
            </div>
        </>
    );
}