import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react" 
import Swal from "sweetalert2";
// import { useState } from "react"

// function ContactForm({sendMessage}) {
//     const [fullname, setFullName] = useState("")
//     const [email, setEmail] = useState("")
//     const [message, setMessage] = useState("")
//     const [formStatus, setFormStatus] = useState('Send')

//     function submitMessage(e){
//         e.preventDefault()

//         setFormStatus('Submitting...')

//         const contactForm = {
//             fullname: fullname,
//             email: email,
//             message: message,
//           }

//          // sendMessage(contactForm)//write this function 

//           setFullName("");
//           setEmail("");
//           setMessage("")

//     }


//   return (
//     <div className="main-container">
//       <h2 className="from-title">Contact Form</h2>

//       <form onSubmit={submitMessage}>

//         <div className="inputs">
//           <input className="nameInput" type="text" id="name" placeholder="Full Name" required />  
//         </div>

//         <div className="inputs">
//           <input className="emailInput" type="email" id="email" placeholder="Email" required />
//         </div>

//         <div className="inputs">
//           <textarea className="messageInput" id="message" placeholder="Message" required />
//         </div>

//         <button className="buttonSubmit" type="submit">
//           {formStatus}
//         </button>
//       </form>
//     </div>
//   )

const SERVICE_ID = "service_nhya2xk";
const TEMPLATE_ID = "template_82itaza";
const USER_ID = "c5hdpgCA-e0dvKDZu";

const ContactForm = () =>{
  
  function handleOnSubmit(e) {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({ icon: "success",  title: "Message Sent Successfully" })
      }, (error) => {
        console.log(error.text);
        Swal.fire({ icon: "error", title: "Ooops, something went wrong", text: error.text, })
      });
    e.target.reset()
  };

return (
    <div className="contactMessage">
      <h2>Contact Us</h2>
      <Form onSubmit={handleOnSubmit}>
          
        <Form.Field id='form-input-control-email' control={Input} label='Email' name='user_email' placeholder='Email…' required icon='mail' iconPosition='left'/>
        <Form.Field id='form-input-control-last-name' control={Input} label='Name'name='user_name' placeholder='Full Name…'required icon='user circle' iconPosition='left'/>
        <Form.Field id='form-textarea-control-opinion' control={TextArea} label='Message' name='user_message' placeholder='Message…' required />
        
        <Button type='submit' >Submit</Button>
      </Form>
    </div>
  );

}
export default ContactForm


// # app.js

// import React from ‘react';
// import emailjs from ‘emailjs-com';
// import { Form, Input, TextArea, Button } from ‘semantic-ui-react';
// import Swal from ‘sweetalert2';

// import ‘./App.css';

// const SERVICE_ID = "**************";
// const TEMPLATE_ID = "*******";
// const USER_ID = "****************";

// const App = () => {
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
//       .then((result) => {
//         console.log(result.text);
//         Swal.fire({
//           icon: ‘success',
//           title: ‘Message Sent Successfully'
//         })
//       }, (error) => {
//         console.log(error.text);
//         Swal.fire({
//           icon: ‘error',
//           title: ‘Ooops, something went wrong',
//           text: error.text,
//         })
//       });
//     e.target.reset()
//   };

// return (
//     <div className=”App”>
//       <Form onSubmit={handleOnSubmit}>
//         <Form.Field
//           id='form-input-control-email'
//           control={Input}
//           label='Email'
//           name='user_email'
//           placeholder='Email…'
//           required
//           icon='mail'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-input-control-last-name'
//           control={Input}
//           label='Name'
//           name='user_name'
//           placeholder='Name…'
//           required
//           icon='user circle'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-textarea-control-opinion'
//           control={TextArea}
//           label='Message'
//           name='user_message'
//           placeholder='Message…'
//           required
//         />
//         <Button type='submit' color='green'>Submit</Button>
//       </Form>
//     </div>
//   );
// }

// export default App;