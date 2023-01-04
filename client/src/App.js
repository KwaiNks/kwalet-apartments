import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import ContactForm from "./ContactForm";
import Reservation from "./Reservation";

function App() {

  const [user, setUser] = useState(null);
  //const [applications, setApplication] = useState([]);

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

  //APPLICATION FORM POST
  // function addApplication(newApplication){
  //   fetch("/applications", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(newApplication)
  //   })
  //   .then((response) => response.json())
  //   .then(data => setApplication([...applications, data]))
  // }

  return (
     <>
       <NavBar user={user} setUser={setUser} />
      <main>
        {user ? (
          // if logged in
      
          <Routes> 
             <Route exact path="/" element={<Home user={user} />}></Route>
             <Route exact path="/contactus" element={ <ContactForm/> }></Route>
             <Route exact path="/reservation" element={ <Reservation/> }></Route>
          </Routes>
         
          )
          :  
        (
            // if logged out
           
        <Routes>
             <Route exact path="/login" element={ <Login setUser={ setUser } />} ></Route>
             <Route exact path="/signup" element={ <Signup setUser={ setUser } />}></Route>
             <Route exact path="/" element={ <Home user={user}/> }></Route>
             <Route exact path="/contactus" element={ <ContactForm/> }></Route>
             <Route exact path="/reservation" element={ <Reservation/> }></Route>

          </Routes> 
          
        )}
      </main>
    </>
  );
        }

export default App;
