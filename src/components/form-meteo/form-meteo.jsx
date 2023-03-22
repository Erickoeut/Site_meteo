import { useState } from "react"

export default function FormMeteo({onNewCity}) {
    const [city,setCity] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setCity('')
        return onNewCity({city})
    }
    
    return (

        <form onSubmit={handleSubmit} action="">
            <input type="text" placeholder="Ville" onChange={(e)=>{setCity(e.target.value)} } value={city}/>
            <button type="submit">Rechercher</button>
        </form>

    )
}