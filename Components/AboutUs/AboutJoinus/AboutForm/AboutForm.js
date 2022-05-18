import React from 'react';
import styles from './aboutform.module.scss'

const AboutForm = () => {
    const {aboutForm, inputContainer, inputSubmit} = styles 

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form className={aboutForm} onSubmit={handleSubmit}>
            <div className={inputContainer}>
                <input type='text' placeholder='Name' required/>
            </div>
            <div className={inputContainer}>
                <input type='email' placeholder='Email' required/>
            </div>
            <div className={inputContainer}>
                <input type='text' placeholder='Number' required/>
            </div>
            <div className={inputContainer}>
                <select required>
                    <option>Choose Department</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
            </div>
            <div className={inputContainer}>
                <input type='file' placeholder='Upload CV' required/>
            </div>
            <div className={inputContainer}>
                <textarea placeholder='Cover Letter'></textarea>
            </div>
            <div className={inputSubmit}>
                <button type='submit'>Send</button>
            </div>
        </form>
    );
};

export default AboutForm;