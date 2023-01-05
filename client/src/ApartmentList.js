import Apartment from "./Apartment"

function ApartmentList({apartments, navigate}){

    return (
        <ul className="apartmentList">
            { 
                apartments.map(apartment => {
                    return <Apartment key={apartment.id} apartment={apartment} navigate={navigate} />
                }).slice(0, 8)      
            }     
        </ul>
    )
}
export default ApartmentList