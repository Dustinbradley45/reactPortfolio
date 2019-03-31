import React from "react";

const Contact = () => {
    return (
        <div className="contactWrapper">
            <form action="submit">
            <h2>Lets Chat!</h2>
                <div className="nameBox">
                    
                    <label htmlFor="firstName" className="visually-hidden">First Name</label>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" />
                    
                    <label htmlFor="lastName" className="visually-hidden">Last Name</label>
                    <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                </div>
                
                <label htmlFor="email" className="visually-hidden">E-Mail</label>
                <input type="email" name="email" id="email" placeholder="E-Mail" />
                
                <label htmlFor="messsage" className="visually-hidden">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>

                <button type="submit">Submit</button>
            </form>
         </div>
    )

}

export default Contact;