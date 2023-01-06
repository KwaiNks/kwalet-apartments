import ApartmentList from "./ApartmentList";

function Home({ user, apartments, navigate }) {

  if (user) {
    return (
      <>
        <h3 id="welcome">Welcome, {user.username}!</h3>
        <h2>Featured Apartments</h2>
        <ApartmentList
          apartments={apartments}
          navigate={navigate}
          user={user}
        />
      </>
    );
  } else {
    return (
      <>
        <h2>Featured Apartments</h2>
        <ApartmentList
          apartments={apartments}
          navigate={navigate}
          user={user}
        />
      </>
    );
  }
}

export default Home;
