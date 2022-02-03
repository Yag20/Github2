import React, { useState } from "react";
import { Repositories } from "./components";
import './style.css'

export const App = () => {
    //put your form in a component dont put in app.js its bad practice
    //try to use mui it was designed for react, style css is more work for no reason.
    //also because your api fetches on load everytime you make changes its sending a request which is why you are timed out.
    const [formData, setFormData] = useState("");
    const [username, setUsername] = useState("");
    

    const handleInput = e => {
        setFormData(e.target.value)
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(formData);
     
    }
    //your code is calling the api on load with no username which is why you should not have it in the return or you can fix this by
    //checking for a username using a ternary before running this code "<Repositories username={username} />". 
    return (
        <>
            <form onSubmit={handleFormSubmit} id="searchForm">
                <input
                    type="text" name="username" id="username"
                    onChange={handleInput} value={formData}
                    placeholder="Search for a username" />
                <button type="submit" id="submitButton">Search</button>
            </form>
             <Repositories username={username} />
        </>
    )
}