import React, {Component } from "react";
import { TweenLite } from "gsap";
import MessageSentModal from "./MessageSentModal";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
            messageSent:false
        }

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

    changeHandler = (e) => {
        console.log(e.target.value)
        this.setState ({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) => {
      
        e.preventDefault();
        this.setState({
            messageSent:true
        })
        
    }

    closeModal = (e) => {
        this.setState({
            messagSent: false,
            firstName: '',
            lastName: '',
            email: '',
            message:''
            
        })
    }
    
    render() {
        const { changeHandler, submitHandler, closeModal } = this;
        const { firstName } = this.state;
    
        return (
            <div className="contactWrapper">
                <form ref={form => this.form = form} action="https://formspree.io/dustinbradley45@live.com" method="POST" onSubmit={submitHandler} >
                    
                    <h2>Lets Chat!</h2>
                    <div className="nameBox">
                    
                        <label htmlFor="firstName" className="visually-hidden">First Name</label>
                        <input type="text" name="firstName" id="firstName" placeholder="First Name"  onChange={changeHandler}/>
                    
                        <label htmlFor="lastName" className="visually-hidden">Last Name</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Last Name"  onChange={changeHandler}/>
                    </div>

                        <label htmlFor="email" className="visually-hidden">E-Mail</label>
                        <input type="email" name="email" id="email" placeholder="E-Mail"  onChange={changeHandler}/>
                

                    <label htmlFor="messsage" className="visually-hidden">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" onChange={changeHandler}></textarea>

                    <button type="submit">Submit</button>
                </form>
                {/* {
                    this.state.messageSent === true ?
                        <MessageSentModal 
                            firstName={firstName}
                            closeModal={closeModal}
                        /> :
                        null
                } */}
            </div>
        )
    }
}

export default Contact;