import Apartment from "./Apartment"

function ApartmentList({apartments, navigate, user}){

    return (
        <ul className="apartmentList">
            { 
                apartments.map(apartment => {
                    return <Apartment key={apartment.id} apartment={apartment} navigate={navigate} user={user} />
                }).slice(0, 8)      
            }     
        </ul>
    )
}
export default ApartmentList