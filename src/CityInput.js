import {useState} from "react";
import {AccessKey, BaseUrl, DefaultCity} from "./consts";
import axios from "axios";

const CityInput = () =>{

    const [city, setCity] = useState(DefaultCity)
    const [images, setImages] =useState()
    // Call back event handler for key down in search
    const cbInput = (evt) =>{
        let newCity = evt.target.value.trim().toLowerCase()
        evt.key === "Enter" && newCity !== city &&
        (()=>{
            setCity(newCity)
            console.log(city)
            fetchCity()
        })()
    }

    const fetchCity = () =>{
        axios.get(BaseUrl, {
            params:{
                query: city,
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
                setImages(imgList)
            })
            .catch(err => console.log("Error during fetching!"))
    }

    return <div>
        <input type="text"
        placeholder="Search"
        onKeyDown={cbInput}
        />
        {JSON.stringify(images)}
    </div>
}

export default CityInput