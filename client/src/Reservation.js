import { useState } from "react";


function Reservation({addReservation}){

    const [firstname , setFirstName] = useState('');
    const [lastname , setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [date_of_birth , setDateOfBirth] = useState('');
    const [sex , setSex] = useState('');
    const [telephone , setTelephoneNumber] = useState(0);
    const [nationality , setNationality] = useState('');
    const [id_number , setIdNumber] = useState('');
    const [email, setEmail] = useState('');
    const [occupation , setOccupation] = useState('');
    // const [date_of_entry , setDateOfEntry] = useState('');
    // const [length_of_stay , setLengthOfStay] = useState(0);
    const [first_ref_name , setFirstReferenceName] = useState('');
    const [first_ref_number, setFirstReferenceNumber] = useState(0);
    const [second_ref_name , setSecondReferenceName] = useState('');
    const [second_ref_number , setSecondReferenceNumber] = useState(0);


    function onFirstNameChange(e){
        setFirstName(e.target.value);
      }
    function onLastNameChange(e){
        setLastName(e.target.value);
      }
    function onAddressChange(e){
        setAddress(e.target.value);
    }
    function onDateOfBirthChange(e){
        setDateOfBirth(e.target.value);
    }
    function onSexChange(e){
        setSex(e.target.value);
    }
    function onTelephoneNumberChange(e){
        setTelephoneNumber(e.target.value);
    }
    function onNationalityChange(e){
        setNationality(e.target.value);
    }
    function onIdNumberChange(e){
        setIdNumber(e.target.value);
    }
    function onEmailChange(e){
        setEmail(e.target.value);
    }
    function onOccupationChange(e){
        setOccupation(e.target.value);
    }
    // function onDateOfEntryChange(e){
    //     setDateOfEntry(e.target.value);
    // }
    // function onLengthOfStayChange(e){
    //     setLengthOfStay(e.target.value);
   // }
    function onFirstReferenceNameChange(e){
        setFirstReferenceName(e.target.value);
    }
    function onFirstReferenceNumberChange(e){
        setFirstReferenceNumber(e.target.value);
    }
    function onSecondReferenceNameChange(e){
        setSecondReferenceName(e.target.value);
    }
    function onSecondReferenceNumberChange(e){
        setSecondReferenceNumber(e.target.value);
    }

    function handleApplicationForm(e) {
        e.preventDefault();

        const newReservation = {
            firstname: firstname,
            lastname: lastname,
            address: address,
            date_of_birth: date_of_birth,
            sex: sex,
            tel_no: telephone,
            nationality: nationality,
            id_number: id_number,
            email: email,
            occupation: occupation,
            // date_of_entry: date_of_entry,
            // length_of_stay: length_of_stay,
            first_ref_name: first_ref_name,
            first_ref_number: first_ref_number,
            second_ref_name: second_ref_name,
            second_ref_number: second_ref_number
        }

       //addApplication(newApplication)//write this function 
        
        setFirstName("");
        setLastName("");
        setAddress("");
        setDateOfBirth("");
        setSex("");
        setTelephoneNumber(0);
        setNationality("");
        setIdNumber(0);
        setEmail("");
        setOccupation("");
        // setDateOfEntry("");
        // setLengthOfStay(0);
        setFirstReferenceName("");
        setFirstReferenceNumber(0);
        setSecondReferenceName("");
        setSecondReferenceNumber(0)
    
    }   

    // let currDate = new Date();
    // let year = currDate.getFullYear();
    // let month = currDate.getMonth() + 1;
    // let day = currDate.getDate();

    // let currentDateString = `${year}-${month}-${day}`;

    return (
        <div id="newReservationForm">
            <h2>Reservation</h2>
            <form onSubmit={handleApplicationForm}>
                <input type="text" value={firstname} onChange={onFirstNameChange} name="firstName" placeholder="FirstName" required />
                <input type="text" value={lastname} onChange={onLastNameChange} name="LastName" placeholder="LastName" required />
                <input type="text" value={address} onChange={onAddressChange} name="address" placeholder="Address" required />
                <input type="date"  value={date_of_birth} onChange={onDateOfBirthChange} name="date" required />
                <input type="text" value={sex} onChange={onSexChange} name="sex" placeholder="Sex" required />
                <input type="number"  min="9" max="9" value={telephone} onChange={onTelephoneNumberChange} name="telephone" placeholder="Telephone" required />
                <input type="text" value={nationality} onChange={onNationalityChange} name="nationality" placeholder="Nationality" required />
                <input type="number"  min="9" max="9" value={id_number} onChange={onIdNumberChange} name="idNumber" placeholder="ID Number" required />
                <input type="text" value={email} onChange={onEmailChange} name="email" placeholder="Email" required />
                <input type="text" value={occupation} onChange={onOccupationChange} name="occupation" placeholder="Occupation" required />
                {/* <input type="date" min={currentDateString} value={date_of_entry} onChange={onDateOfEntryChange} name="date" required />
                <input type="number"  min="1" max="24"  value={length_of_stay} onChange={onLengthOfStayChange} name="lengthOfStay" placeholder="Length of Stay" required /> */}
                <input type="text" value={first_ref_name} onChange={onFirstReferenceNameChange} name="firstReferenceName" placeholder="First Reference Name" required />
                <input type="number"  min="9" max="9" value={first_ref_number} onChange={onFirstReferenceNumberChange} name="firstReferenceNumber" placeholder="First Reference Number" required />
                <input type="text" value={second_ref_name} onChange={onSecondReferenceNameChange} name="secondReferenceName" placeholder="Second Reference Name" required />
                <input type="number"  min="9" max="9" value={second_ref_number} onChange={onSecondReferenceNumberChange} name="secondReferenceNumber" placeholder="Second Reference Number" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Reservation;