import React, {Component } from "react";
import { TweenLite } from "gsap";

class Contact extends Component {
    constructor() {
        super();

        this.formFade = null;
        this.formHeader = null;
        this.form = null;
        this.nameBox = null;

        this.inputFade = null;
      
    }

    componentDidMount() {

        this.formFade = TweenLite.to(this.form, 1, {
            opacity: 1,
            y: "-10",
        });
    }
    
    render() {
    
        return (
            <div className="contactWrapper">
                <form action="submit" ref={form => this.form = form}>
                    
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
}

export default Contact;