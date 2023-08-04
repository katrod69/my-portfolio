 import React from "react";

 function Contact() {
  // const [Name] = useState('');
  // const [Email] = useState('');
  // const [Number] = useState('');


    return (
      <>
         <form className="contact-form">
            <div class="row">
              <div class="col-12 col-sm-6">
                <label for="first-name">Name</label>
                <input type="text" class="form-input" name="Name" placeholder="Name" />
              </div>
             </div>
            <div class="row">
              <div class="col-12 col-sm-6">
                <label for="email">Email</label>
                <input type="email" class="form-input" name="Email" placeholder="Email" />
              </div>
              <div class="col-12 col-sm-6">
                <label for="number">Phone Number</label>
                <input type="text" class="form-input" name="Number" placeholder="Phone number" />
              </div>
            </div>
            <button class="btn btn-block btn-danger">Submit Form</button>
          </form>
      </>
    );
  }
  
  export default Contact;