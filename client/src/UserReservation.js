import React, { useState, useEffect } from "react";
import UserReservationList from "./UserReservationList.js";

function UserReservation() {

  const [userApplications, setuserApplications] = useState([]);

  useEffect(() => {
    fetch("/reservations")
      .then((response) => response.json())
      .then((data) => setuserApplications(data));
  }, []);

  console.log(userApplications)

  const renderUserApplications = userApplications.map((userApplication) => {
    return (
      <UserReservationList
        key={userApplication.id}
        userApplication={userApplication}
      />
    );
  });

  return (
    <div>
      <h2>My Applications</h2>
      {renderUserApplications}
    </div>
  );
}
export default UserReservation;
