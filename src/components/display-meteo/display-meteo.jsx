import { useEffect, useState } from "react";
import style from "./display-meteo.module.css"
import axios from "axios"
export default function DisplayMeteo({ currentCity, onSave }) {
    const [resData, setResData] = useState(null)

    useEffect(() => {
        if (currentCity) {
            const params = {
                q: currentCity, units: 'metric', lang: 'fr', appid: process.env.REACT_APP_WEATHER_KEY
            }; 
            axios.get(`https://api.openweathermap.org/data/2.5/weather`,{params})
                .then(function ({data}) {
                    setResData({
                        skyMeteo: data.weather[0].description,
                        temp: data.main.temp,
                        id: data.id,
                        name: data.name,
                        icon: data.weather[0].icon
                    })
                })
                .catch((err) => { console.log(err) })
        }
        return (
            setResData(null)
        )
    }, [currentCity]
    )
    return (<>

        {(currentCity && resData) && <div className={style.card}>
            <h2>Météo a {resData.name}</h2>
            <img src={`https://openweathermap.org/img/wn/${resData.icon}@4x.png`} alt="weather-icon"  />
            <p> {resData.skyMeteo} , température : {resData.temp} °C </p>
                <button onClick={() => onSave(resData)}>Sauvegarder</button>
        </div>}
    </>)
}

DisplayMeteo.defaultProps = {
    onSave: () => { }
}