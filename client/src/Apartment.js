
function Apartment({apartment, navigate}){
function handleClick(apartment){
console.log(apartment.id)
navigate("/reservations", {state:{apartment_id:apartment.id}})

}

    return(
        <div className="apartment-details">
            <div className="imageContainer">
         <img className="image" src={apartment.image} alt={apartment.apt_number}/>
         <button onClick={() => handleClick(apartment)}>Apply</button>
         </div>
        </div>
    )
}
export default Apartment
