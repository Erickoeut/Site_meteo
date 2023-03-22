import style from './display-save-city-meteo.module.css'

export default function DisplaySaveCityMeteo({ listCity, onDelete }) {
    return (
        <>
            {(listCity.length !== 0) && <h2>Villes enregistrées</h2>}
            <div className={style.saveCities}>
                {listCity.map(city => <div className={style.card} key={city.id}>
                    <h3>{city.name}</h3>
                    <img src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`} alt="weather-icon"  />
                    <p>{city.skyMeteo}</p><p>temperature : {city.temp}°C</p>
                    <button onClick={() => onDelete(city.id)}>Supprimer</button>
                </div>)}
            </div>

        </>
    )
}

DisplaySaveCityMeteo.defaultProps = {
    onDelete: () => { }
}