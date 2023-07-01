import {useEffect, useState} from "react";
import {AccessKey, BaseUrl, DefaultCity} from "./consts";
import axios from "axios";
import './CityInput.scss'

const CityInput = ({cbUpdateImages}) =>{

    // City state
    const [city, setCity] = useState(DefaultCity)
    // Call back event handler for key down in search
    const cbInput = (evt) =>{
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === "Enter" && newCity !== city &&
        (()=>{
            setCity(newCity)
            fetchCity(newCity)
        })()
    }

    // Update default city
    useEffect(() => {fetchCity(DefaultCity)},[])
    // Fetch city images
    const fetchCity = (newCity) =>{
        axios.get(BaseUrl, {
            params:{
                query: newCity,
                orientation: 'landscape',
            },
            headers:{
                Authorization: `Client-ID ${AccessKey}`
            }
        })
            .then(res =>{
                let {data: {results}} = res
                console.log('raw data:', results)

                let imgList = results.map(item =>({
                    description: item.alt_description,
                    regular:item.urls.regular,
                    thumb: item.urls.thumb
                }))
                cbUpdateImages(imgList)
            })
            .catch(err => console.log("Error during fetching!"))
    }

    return <>
        <h2 className='cityName'>New City: {city}</h2>
        <input type="text"
               className='inputCity'
               placeholder="Search"
               onKeyDown={cbInput}
        />
    </>

}

export default CityInput