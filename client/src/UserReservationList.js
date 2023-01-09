
function UserReservationList({ userApplication}){

    const date = userApplication.created_at.split("T")[0]

return(
    <div className="myApplications">
    <h5>Apartment Type: {userApplication.apartment.apt_type}</h5>
    <h5>Price: $ {userApplication.apartment.price}</h5>
    <h5>Date: {date}</h5>
    </div>
)
}

export default UserReservationList;

