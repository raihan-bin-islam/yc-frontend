import React, { useState } from 'react';
import useFetch from '../../../Hooks/useFetch';
import styles from './aboutform.module.scss'

const AboutForm = () => {
    const {aboutForm, inputContainer, inputSubmit} = styles 

    // get departments
    const [deptIsLoading, deptData] = useFetch('/departments')
    
    // form state 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [department, setDepartment] = useState('')
    const [resume, setResume] = useState('')
    const [cover, setCover] = useState('')

    const [isSending, setIsSending] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)


    // handle submit
    const handleSubmit = e => {
        e.preventDefault()

        const resumeData = new FormData()

        resumeData.append('name', name);
        resumeData.append('email', email);
        resumeData.append('contact_number', contact);
        resumeData.append('department', department);
        resumeData.append('cover_letter', cover);
        resumeData.append('cv', resume);

        // request options
        const requestOptions = {
            method: 'POST',
            body: resumeData
        }

        setIsSending(true)
        setIsDisabled(true)

        fetch('https://node.pickupexpressbd.com/api/join-us', requestOptions)
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert("Submitted!")
                    setName('')
                    setEmail('')
                    setContact('')
                    setCover('')
                    setDepartment('')
                    setResume('')
                    e.target.reset()
                    setIsSending(false)
                    setIsDisabled(false)
                }
                else{
                    alert('something went wrong')
                    setName('')
                    setEmail('')
                    setContact('')
                    setCover('')
                    setDepartment('')
                    setResume('')
                    e.target.reset()
                    setIsSending(false)
                    setIsDisabled(false)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <form className={aboutForm} onSubmit={handleSubmit}>
            <div className={inputContainer}>
                <input 
                    type='text' 
                    placeholder='Name' 
                    required 
                    value={name}
                    onChange={e => setName(e.target.value)}/>
            </div>
            <div className={inputContainer}>
                <input 
                    type='email' 
                    placeholder='Email' 
                    required 
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className={inputContainer}>
                <input 
                    type='number'
                    min='1' 
                    placeholder='Number' 
                    required
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    />
            </div>
            <div className={inputContainer}>
                <select required onChange={e => setDepartment(e.target.value)}>
                    <option>Select Department</option>
                    {deptData && deptData.map(dept => <option key={dept.id} value={dept.id}>{dept.title}</option>)}
                    
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
                <button type='submit' disabled={isDisabled}>{isSending ? 'Sending..' : 'Send'}</button>
            </div>
        </form>
    );
};

export default AboutForm;