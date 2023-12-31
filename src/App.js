import './App.scss';
import CityInput from "./CityInput";
import ImageList from "./ImageList";
import {useEffect, useState} from "react";
function App() {

    // Image list and background image states
    const [images,setImages] = useState([])
    const [bgImg,setBgImg] = useState('')

    // Update title
    useEffect(()=>{
        document.title = !!bgImg && bgImg?.description && bgImg.description ? bgImg.description.charAt(0).toUpperCase() + bgImg.description.slice(1):'Loading...'
    },[bgImg])

    // Update background image
    useEffect(()=>{
        images.length>0 && setBgImg(images[0])},[images])

    // Functions for state
    const updateImages = (newImages) =>{
        setImages(newImages)
    }
    const updateMainBG = img =>{
        setBgImg(img)
    }

  return (
    <div className="App" style={{background: bgImg.regular && `url(${bgImg.regular}) no-repeat center/cover fixed`}}>
        <div className='searchBar'>
            <CityInput cbUpdateImages={updateImages}/>
        </div>
        <ImageList images={images} updateMainBG={updateMainBG}/>
    </div>
  );
}

export default App;
