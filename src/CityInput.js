const CityInput = () =>{

    // Call back event handler for key down in search
    const cbInput = (evt) =>{
        evt.key === "Enter" &&
        (()=>{
            let city = evt.target.value.trim().toLowerCase()
            console.log(city)
        })()
    }

    return <div>
        <input type="text"
        placeholder="Search"
        onKeyDown={cbInput}
        />
    </div>
}

export default CityInput