import React, { useState } from 'react';
import styles from './aboutform.module.scss'

const AboutForm = () => {
    const {aboutForm, inputContainer, inputSubmit} = styles 

    // form state 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [department, setDepartment] = useState('')
    const [resume, setResume] = useState('')
    const [cover, setCover] = useState('')

    // const resumeData = {
    //     name, email, contact, department, resume, cover
    // }

    const handleSubmit = e => {
        e.preventDefault()

        const resumeData = new FormData()

        resumeData.append('name', name);
        resumeData.append('email', email);
        resumeData.append('contact_number', contact);
        resumeData.append('department', department);
        resumeData.append('cover_letter', cover);
        resumeData.append('cv', resume);
        
        setName('')
        setEmail('')
        setContact('')
        setCover('')
        setDepartment('')
        setResume('')
    }

    return (
        <form className={aboutForm} onSubmit={handleSubmit}>
            <div className={inputContainer}>
                <input 
                    type='text' 
                    placeholder='name' 
                    required 
                    value={name}
                    onChange={e => setName(e.target.value.trim())}/>
            </div>
            <div className={inputContainer}>
                <input 
                    type='email' 
                    placeholder='email' 
                    required 
                    value={email}
                    onChange={e => setEmail(e.target.value.trim())}/>
            </div>
            <div className={inputContainer}>
                <input 
                    type='number'
                    min='1' 
                    placeholder='number' 
                    required
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    />
            </div>
            <div className={inputContainer}>
                <select required onChange={e => setDepartment(e.target.value)}>
                    <option>Choose Department</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
                </select>
            </div>
            <div className={inputContainer}>
                <input 
                    type='file' 
                    placeholder='Upload CV' 
                    accept=".xlsx,.xls,.doc,.docx,.ppt,.pptx,.txt,.pdf"
                    required 
                    onChange={e=> setResume(e.target.files[0])}/>
            </div>
            <div className={inputContainer}>
                <textarea 
                    placeholder='Cover Letter'
                    value={cover} 
                    onChange={e => setCover(e.target.value)}></textarea>
            </div>
            <div className={inputSubmit}>
                <button type='submit'>Send</button>
            </div>
        </form>
    );
};

export default AboutForm;