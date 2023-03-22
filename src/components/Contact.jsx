import React, { useState,useRef } from 'react'

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



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    setForm({
      name: "",
      email: "",
      message: "",
    });

  };



  return (
    <div className="contact-container">
      <div className="container d-flex align-items-center justify-content-center">
        <form className="formBox" 
        ref={formRef}
        onSubmit={handleSubmit}
        >
          <h2>&lt; Contact Me /&gt; </h2>
          <div ><input className='form-control' type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange} /></div>
          <div><input className='form-control' type="email" placeholder='Email' name='email' value={form.email} onChange={handleChange} /></div>
          <div><input className='form-control' type="text" placeholder='Subject' name='subject' value={form.subject} onChange={handleChange} /></div>
          <div><textarea className='form-control' placeholder='Message' name="message" value={form.message} onChange={handleChange} cols="30" rows="5"></textarea></div>
          <div><button className='btn' type='submit' onClick={handleSubmit}>Send</button></div>
        </form>
      </div>
    </div>
  )
}

export default Contact