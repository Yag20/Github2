import React, { useState } from "react";
import { Repositories } from "./components";
import './style.css'

export const App = () => {
    const [formData, setFormData] = useState("");
    const [username, setUsername] = useState("");
    

    const handleInput = e => {
        setFormData(e.target.value)
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        setUsername(formData);
     
    }

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