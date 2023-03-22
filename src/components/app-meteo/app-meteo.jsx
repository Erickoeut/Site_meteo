import { useState } from "react";
import DisplayMeteo from "../display-meteo/display-meteo";
import DisplaySaveCityMeteo from "../display-save-city-meteo/display-save-city-meteo";
import FormMeteo from "../form-meteo/form-meteo";

export default function AppMeteo() {
    const [currentCity, setCurrentCity] = useState('')
    const [listCity, setListCity] = useState([])
    const onNewCity = ({ city }) => {
        setCurrentCity(city)
    }
    const onSave = (newCity) => {
        if (listCity.length === 0) {
            setListCity(listCity => [...listCity, newCity])
        }
        else {
            if(listCity.filter((city)=>city.id===newCity.id).length===0){
            setListCity(listCity => [...listCity, newCity])
        }}
    }
    const onDelete = (id)=>{
        const listCityCopy = [...listCity]
        const listCityUpdate = listCityCopy.filter((city)=>city.id !==id)
        setListCity(listCityUpdate)
    }
    return (<>
        <FormMeteo onNewCity={onNewCity} />
        <DisplayMeteo currentCity={currentCity} onSave={onSave} />
        <DisplaySaveCityMeteo onDelete={onDelete} listCity={listCity} />
    </>)
}