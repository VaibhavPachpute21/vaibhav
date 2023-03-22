import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="formBox">
          <h2>&lt; Contact Me /&gt; </h2>
          <div ><input className='form-control' type="text" placeholder='Name' /></div>
          <div><input className='form-control' type="email" placeholder='Email' /></div>
          <div><input className='form-control' type="text" placeholder='Subject' /></div>
          <div><textarea className='form-control' name="Message" id="" cols="30" rows="10"></textarea></div>
          <div><button className='btn'>Send</button></div>

        </div>
      </div>
    </div>
  )
}

export default Contact