// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// function Reservation({ addReservation, user }) {


//   const [firstname, setFirstName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [address, setAddress] = useState("");
//   const [date_of_birth, setDateOfBirth] = useState("");
//   const [sex, setSex] = useState("");
//   const [tel_no, setTelephoneNumber] = useState(0);
//   const [nationality, setNationality] = useState("");
//   const [id_number, setIdNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [occupation, setOccupation] = useState("");
//   const [date_of_entry, setDateOfEntry] = useState("");
//   const [length_of_stay, setLengthOfStay] = useState(0);
//   const [first_ref_name, setFirstReferenceName] = useState("");
//   const [first_ref_number, setFirstReferenceNumber] = useState(0);
//   const [second_ref_name, setSecondReferenceName] = useState("");
//   const [second_ref_number, setSecondReferenceNumber] = useState(0);
//   const location = useLocation();

//   function onFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }
//   function onLastNameChange(e) {
//     setLastName(e.target.value);
//   }
//   function onAddressChange(e) {
//     setAddress(e.target.value);
//   }
//   function onDateOfBirthChange(e) {
//     setDateOfBirth(e.target.value);
//   }
//   function onSexChange(e) {
//     setSex(e.target.value);
//   }
//   function onTelephoneNumberChange(e) {
//     setTelephoneNumber(e.target.value);
//   }
//   function onNationalityChange(e) {
//     setNationality(e.target.value);
//   }
//   function onIdNumberChange(e) {
//     setIdNumber(e.target.value);
//   }
//   function onEmailChange(e) {
//     setEmail(e.target.value);
//   }
//   function onOccupationChange(e) {
//     setOccupation(e.target.value);
//   }
//   function onDateOfEntryChange(e) {
//     setDateOfEntry(e.target.value);
//   }
//   function onLengthOfStayChange(e) {
//     setLengthOfStay(e.target.value);
//   }
//   function onFirstReferenceNameChange(e) {
//     setFirstReferenceName(e.target.value);
//   }
//   function onFirstReferenceNumberChange(e) {
//     setFirstReferenceNumber(e.target.value);
//   }
//   function onSecondReferenceNameChange(e) {
//     setSecondReferenceName(e.target.value);
//   }
//   function onSecondReferenceNumberChange(e) {
//     setSecondReferenceNumber(e.target.value);
//   }

//   function handleApplicationForm(e) {
//     e.preventDefault();

//     const newReservation = {
//       firstname: firstname,
//       lastname: lastname,
//       address: address,
//       date_of_birth: date_of_birth,
//       sex: sex,
//       tel_no: tel_no,
//       nationality: nationality,
//       id_number: id_number,
//       email: email,
//       occupation: occupation,
//       date_of_entry: date_of_entry,
//       length_of_stay: length_of_stay,
//       first_ref_name: first_ref_name,
//       first_ref_number: first_ref_number,
//       second_ref_name: second_ref_name,
//       second_ref_number: second_ref_number,
//       user_id: user.id,
//       apartment_id: location.state.apartment_id,
//     };

//     addReservation(newReservation);

//     setFirstName("");
//     setLastName("");
//     setAddress("");
//     setDateOfBirth("");
//     setSex("");
//     setTelephoneNumber(0);
//     setNationality("");
//     setIdNumber(0);
//     setEmail("");
//     setOccupation("");
//     setDateOfEntry("");
//     setLengthOfStay(0);
//     setFirstReferenceName("");
//     setFirstReferenceNumber(0);
//     setSecondReferenceName("");
//     setSecondReferenceNumber(0);
//   }

//   let currDate = new Date();
//   let year = currDate.getFullYear();
//   let month = currDate.getMonth() + 1;
//   let day = currDate.getDate();

//   let currentDateString = `${year}-${month}-${day}`;

//   return (
//     <div id="newReservationForm">
//       <h2>Application Form</h2>
//       <form className="application" onSubmit={handleApplicationForm}>
//         <div>
//         <label htmlFor="firstName">First Name </label>
//         <input
//         className="input-application"
//           type="text"
//           value={firstname}
//           onChange={onFirstNameChange}
//           name="firstName"
//           placeholder="First Name..."
//           required
//         />
//         <label htmlFor="lastName">Last Name </label>
//         <input
//          className="input-application"
//           type="text"
//           value={lastname}
//           onChange={onLastNameChange}
//           name="lastName"
//           placeholder="Last Name..."
//           required
//         />
//         <label htmlFor="address">Address </label>
//         <input
//          className="input-application"
//           type="text"
//           value={address}
//           onChange={onAddressChange}
//           name="address"
//           placeholder="Address..."
//           required
//         />
//         <label htmlFor="date">Date of Birth </label>
//         <input
//          className="input-application"
//           type="date"
//           value={date_of_birth}
//           onChange={onDateOfBirthChange}
//           name="date"
//           required
//         />
//         </div>
//         <div>
//         <label htmlFor="sex">Sex </label>
//         <input
//          className="input-application"
//           type="text"
//           value={sex}
//           onChange={onSexChange}
//           name="sex"
//           placeholder="Sex..."
//           required
//         />
//         <label htmlFor="telephone">Telephone </label>
//         <input
//          className="input-application"
//           type="number"
//           value={tel_no}
//           onChange={onTelephoneNumberChange}
//           name="telephone"
//           placeholder="Telephone..."
//           required
//         />
//         <label htmlFor="nationality">Nationality </label>
//         <input
//          className="input-application"
//           type="text"
//           value={nationality}
//           onChange={onNationalityChange}
//           name="nationality"
//           placeholder="Nationality..."
//           required
//         />
//         <label htmlFor="idNumber">ID Number </label>
//         <input
//          className="input-application"
//           type="number"
//           value={id_number}
//           onChange={onIdNumberChange}
//           name="idNumber"
//           placeholder="ID Number..."
//           required
//         />
//         </div>
//         <div>
//         <label htmlFor="email">Email </label>
//         <input
//          className="input-application"
//           type="text"
//           value={email}
//           onChange={onEmailChange}
//           name="email"
//           placeholder="Email..."
//           required
//         />
//         <label htmlFor="occupation">Occupation </label>
//         <input
//          className="input-application"
//           type="text"
//           value={occupation}
//           onChange={onOccupationChange}
//           name="occupation"
//           placeholder="Occupation..."
//           required
//         />
//         <label htmlFor="dateOfEntry">Date of Entry </label>
//         <input
//          className="input-application"
//           type="date"
//           min={currentDateString}
//           value={date_of_entry}
//           onChange={onDateOfEntryChange}
//           name="date"
//           required
//         />
//         <label htmlFor="lengthOfStay">Length of Stay </label>
//         <input
//          className="input-application"
//           type="number"
//           value={length_of_stay}
//           onChange={onLengthOfStayChange}
//           name="lengthOfStay"
//           placeholder="Length of Stay..."
//           required
//         />
//         </div>
//         <div>
//         <lengthofstay>Months</lengthofstay>
//         <label htmlFor="firstReferenceName">First Reference Name </label>
//         <input
//          className="input-application"
//           type="text"
//           value={first_ref_name}
//           onChange={onFirstReferenceNameChange}
//           name="firstReferenceName"
//           placeholder="First Reference Name..."
//           required
//         />
//         <label htmlFor="firstReferenceNumber">First Reference Number </label>
//         <input
//          className="input-application"
//           type="number"
//           value={first_ref_number}
//           onChange={onFirstReferenceNumberChange}
//           name="firstReferenceNumber"
//           placeholder="First Reference Number.."
//           required
//         />
//         </div>
//         <div>
//         <label htmlFor="secondReferenceName">Second Reference Name </label>
//         <input
//          className="input-application"
//           type="text"
//           value={second_ref_name}
//           onChange={onSecondReferenceNameChange} 
//           name="secondReferenceName"
//           placeholder="Second Reference Name..."
//           required
//         />
//         <label htmlFor="secondReferenceNumber">Second Reference Number </label>
//         <input
//          className="input-application"
//           type="number"
//           value={second_ref_number}
//           onChange={onSecondReferenceNumberChange}
//           name="secondReferenceNumber"
//           placeholder="Second Reference Number..."
//           required
//         />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default Reservation;

import { useState } from "react";
import { send } from 'emailjs-com';
import { Button, Form, Input, Select} from 'semantic-ui-react'
import { useLocation } from "react-router-dom";

function Reservation({ addReservation, user }) {

  const SERVICE_ID = "service_nhya2xk";
  const TEMPLATE_ID = "template_82itaza";
  const USER_ID = "c5hdpgCA-e0dvKDZu";
const location = useLocation();

const[toSend, setToSend] = useState({

  firstname:"",
  lastname:"",
  address:"",
  date_of_birth:"",
  sex:"",
  tel_no:"",
  nationality:"",
  id_number:"",
  email:"",
  occupation:"",
  date_of_entry:"",
  length_of_stay:"",
  first_ref_name:"",
  first_ref_number:"",
  second_ref_name:"",
  second_ref_number:""
  
})

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const handleChange = (e) => {
  setToSend({ ...toSend, [e.target.name]: e.target.value });
};


  function handleApplicationForm(e) {
    e.preventDefault();

    const newReservation = {
      firstname: toSend.firstname,
      lastname: toSend.lastname,
      address: toSend.address,
      date_of_birth: toSend.date_of_birth,
      sex: toSend.sex,
      tel_no: toSend.tel_no,
      nationality: toSend.nationality,
      id_number: toSend.id_number,
      email: toSend.email,
      occupation: toSend.occupation,
      date_of_entry: toSend.date_of_entry,
      length_of_stay: toSend.length_of_stay,
      first_ref_name: toSend.first_ref_name,
      first_ref_number: toSend.first_ref_number,
      second_ref_name: toSend.second_ref_name,
      second_ref_number: toSend.second_ref_number,
      user_id: user.id,
      apartment_id: location.state.apartment_id,
    };

    addReservation(newReservation);
    
    //Sending form as an email to administrator
    send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  }

  // let currDate = new Date();
  // let year = currDate.getFullYear();
  // let month = currDate.getMonth() + 1;
  // let day = currDate.getDate();

  // let currentDateString = `${year}-${month}-${day}`;

  return (
<Form onSubmit={handleApplicationForm}>
  <Form.Group widths='equal'>
  <Form.Field
            control={Input}
            type="text"
            name="firstname"
            className="input-application"
            value = {toSend.firstname}
            onChange={handleChange}
            label='First name'
            placeholder='First Name...'
            required
          />

<Form.Field
            control={Input}
            type="text"
            name="lastname"
            className="input-application"
            value={toSend.lastname}
            onChange={handleChange}
            label='Last name'
            placeholder='Last Name...'
            required
          />

<Form.Field
            control={Input}
            type="text"
            name="address"
            className="input-application"
            value={toSend.address}
            onChange={handleChange}
            label='Address'
            placeholder='Address...'
            required
          />
  </Form.Group>

  <Form.Group widths='equal'>
<Form.Field
            control={Input}
            type="date"
            name="date_of_birth"
            className="input-application"
            value={toSend.date_of_birth}
            onChange={handleChange}
            label='Date Of Birth'
            placeholder='Date Of Birth...'
            required
          />

<Form.Field
            control={Select}
            type="text"
            label='Gender'
            name="sex"
            value={toSend.sex}
            onChange={handleChange}
            className="input-application"
            options={options}
            placeholder='Gender...'
            required
          />

<Form.Field
            control={Input}
            text="integer"
            label='Phone'
            value={toSend.tel_no}
            onChange={handleChange}
            name="tel_no"
            className="input-application"
            placeholder='Phone...'
            required
          />
  </Form.Group>

  <Form.Group widths='equal'>
<Form.Field
            control={Input}
            type="text"
            label='Nationality'
            name="nationality"
            value={toSend.nationality}
            onChange={handleChange}
            className="input-application"
            placeholder='Nationality...'
            required
          />
<Form.Field
            control={Input}
            type="tel"
            label='National ID Number'
            name="id_number"
            value={toSend.id_number}
            onChange={handleChange}
            className="input-application"
            placeholder='National ID Number...'
            required
          />

<Form.Field
            control={Input}
            type="email"
            label='Email'
            name="email"
            value={toSend.email}
            onChange={handleChange}
            className="input-application"
            placeholder='Email...'
            required
          />
  </Form.Group>

  <Form.Group widths='equal'>
<Form.Field
            control={Input}
            type="text"
            label='Occupation'
            name="occupation"
            value={toSend.occupation}
            onChange={handleChange}
            className="input-application"
            placeholder='Occupation...'
            required
          />
<Form.Field
            control={Input}
            type="date"
            name="date_of_entry"
            value={toSend.date_of_entry}
            onChange={handleChange}
            label='Date Of Entry'
            className="input-application"
            placeholder='Date Of Entry...'
            required
          />

<Form.Field
            control={Input}
            type="number"
            label='Length Of Stay In Months'
            name="length_of_stay"
            value={toSend.length_of_stay}
            onChange={handleChange}
            className="input-application"
            placeholder='Length Of Stay In Months...'
            required
          />
  </Form.Group>

  <Form.Group widths='equal'>
<Form.Field
            control={Input}
            type="text"
            label='First Reference Name'
            name="first_ref_name"
            value={toSend.first_ref_name}
            onChange={handleChange}
            className="input-application"
            placeholder='First Reference Name...'
            required
          />
          <Form.Field
            control={Input}
            type="number"
            label='First Reference Number'
            name="first_ref_number"
            value={toSend.first_ref_number}
            onChange={handleChange}
            className="input-application"
            placeholder='First Reference Number...'
            required
          />
  </Form.Group>

  <Form.Group widths='equal'>
<Form.Field
            control={Input}
            type="text"
            label='Second Reference Name'
            name="second_ref_name"
            value={toSend.second_ref_name}
            onChange={handleChange} 
            className="input-application"
            placeholder='Second Reference Name...'
            required
          />
<Form.Field
            control={Input}
            type="number"
            label='Second Reference Number'
            name="second_ref_number"
            value={toSend.second_ref_number}
            onChange={handleChange}
            className="input-application"
            placeholder='Second Reference Number...'
            required
          />
  </Form.Group>
  <Button type="submit" >Submit</Button>
</Form>

    
  );
}
export default Reservation;


