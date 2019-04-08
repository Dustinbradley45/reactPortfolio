import React from "react";

const MessageSentModal = ({
        closeModal,
        firstName,
    }) => {

    return (
        <div className="messageSentWrapper">
            <h2>Thanks, {firstName}!</h2>
            <p>I'll be in touch shortly!</p>
            <button onClick={(e)=>closeModal}>Close</button>
        </div>
    )
}

export default MessageSentModal;