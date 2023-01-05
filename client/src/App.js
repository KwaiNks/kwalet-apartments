import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import ContactForm from "./ContactForm";
// import UserReservation from "./UserReservation";
import Reservation from "./Reservation";
import { useNavigate } from "react-router-dom";

function App() {

  const [user, setUser] = useState(null);
  const [reservation, setReservation] = useState([]);
  const [apartments, setApartments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // keeping user logged in
    fetch("/me")
    .then((response) => {
      if (response.ok) {
        response.json()
        .then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/apartments") 
    .then((response) =>{
      if (response.ok) {

        response.json()
        .then((apartments) =>setApartments(apartments));
    }
  });
    
  },[]);


  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }


  function addReservation(newReservation){
    console.log(newReservation)
    fetch("/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReservation)
    })
    .then((response) => response.json())
    .then(data => setReservation([...reservation, data]))
  }

  return (
     <>
       <NavBar user={user} setUser={setUser} handleLogoutClick={handleLogoutClick}/>
      <main>
        {user ? (
          // if logged in
      
          <Routes> 
             <Route exact path="/" element={<Home user={user} apartments={apartments} navigate={navigate}/>}></Route>
             <Route exact path="/contactus" element={ <ContactForm/> }></Route>
             <Route exact path="/reservations" element={ <Reservation addReservation={addReservation} user={user}/> }></Route>
             {/* <Route exact path="/userreservations" element={ <UserReservation/> }></Route> */}
          </Routes>
         
          )
          :  
        (
            // if logged out
           
        <Routes>
              <Route exact path="/" element={ <Home user={user} apartments={apartments} navigate={navigate}/>  }></Route>
             <Route exact path="/login" element={ <Login setUser={ setUser } />} ></Route>
             <Route exact path="/signup" element={ <Signup setUser={ setUser } />}></Route>
             <Route exact path="/contactus" element={ <ContactForm/> }></Route>
        </Routes> 
          
        )}
      </main>
    </>
  );
        }

export default App;
