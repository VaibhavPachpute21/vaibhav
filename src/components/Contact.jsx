import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formRef.current.reportValidity()) {
      return;
    }
    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim()
    };
  
    if (
      trimmedForm.name === "" ||
      trimmedForm.email === "" ||
      trimmedForm.subject === "" ||
      trimmedForm.message === ""
    ) {
      toast.error('Plsease fill all fields!');
      return;
    }
  
    try {
      await emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
        from_name: form.name,
        to_name: 'Vaibhav',
        from_email: form.email,
        to_email: 'vpachpute22@gmail.com',
        message: form.message,
        subject: form.subject
      }, process.env.REACT_APP_PUBLIC_KEY);
  
      toast.success('Message sent! I will get back to you soon.!');
  
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };
  



  return (
    <div className="contact-container">
      <div className="container d-flex align-items-center justify-content-center">
        <form className="formBox"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h2>&lt; Contact Me /&gt; </h2>
          <div ><input className='form-control' type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange} required={true} /></div>
          <div><input className='form-control' type="email" placeholder='Email' name='email' value={form.email} onChange={handleChange} required={true}/></div>
          <div><input className='form-control' type="text" placeholder='Subject' name='subject' value={form.subject} onChange={handleChange} required={true}/></div>
          <div><textarea className='form-control' placeholder='Message' name="message" value={form.message} onChange={handleChange} cols="30" rows="5" required={true}></textarea></div>
          <div><button className='btn' type='submit' onClick={handleSubmit}>Send</button></div>
        </form>
      </div>
    </div>
  )
}

export default Contact