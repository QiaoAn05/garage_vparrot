import React from "react";
import CarTest from '../../images/car-test.jpg';

export default function Car({carInfo, onClick, onEdit}) {
    //state
    //comportement
    //ToDo: mettre à jour la date sans avoir à recharger la page.
    const formatDate = (DateToFormat) => {
        const date = new Date(DateToFormat);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

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
                        Publié le { formatDate(carInfo.updatedAt) }
                        <span className='delUp-card'>
                            <button className="btn-update" onClick={onEdit}>Edit</button>
                            <button className="btn-delete" onClick={onClick}>X</button>
                        </span>
                    </p>                            
            </div>
        </>
    );
}