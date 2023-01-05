import ApartmentList from "./ApartmentList";

function Home({ user, apartments, navigate }) {

  console.log(apartments)
  
    if (user) {
      return (<>
      <h1>Welcome, {user.username}!</h1>
      {/* <img className="apartment_image" src={apartments.image} alt={apartments.apt_number}/> */}
      <ApartmentList apartments={apartments} navigate={navigate}/>
      </>);
    } else {
      return (<> 
      <h1>KwaLet Apartments</h1>
      <img className="apartment_image" src={apartments.image} alt={apartments.apt_number}/>
       </> )
    }
  }
  
export default Home;
  