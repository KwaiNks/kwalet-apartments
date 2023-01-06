function Apartment({ apartment, navigate, user }) {
    
  function handleClick(apartment) {
    if (user) {
      navigate("/reservations", { state: { apartment_id: apartment.id } });
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="apartment-details">
      <div className="imageContainer">
        <img
          className="image"
          src={apartment.image}
          alt={apartment.apt_number}
        />
        {"   " + apartment.apt_type + "     "} | Monthly Rent: $
        {"   " + apartment.price + "      "} |
        {apartment.status ? "  Available   " : "   Not Available   "}
        <button
          disabled={!apartment.status}
          onClick={() => handleClick(apartment)}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
export default Apartment;
