import React, { useState, useEffect } from 'react';
import UserReservationList from './U serReservationList.js'

function UserReservation(){

    const [userReservations, setUserReservations] = useState([])

    useEffect(() => {
        fetch('/reservations')
        .then(response => response.json())
        .then(data => setUserReservations(data))
    }, [])

    const renderUserReservations = userReservations.map((userReservation) => {
        return <UserReservationList key={userReservation.id} userReservation={userReservation}/>
        })

    return(
    <div>
        <h2>My Reservation</h2>
        {renderUserReservations}
    </div>
    )
}
export default UserReservation