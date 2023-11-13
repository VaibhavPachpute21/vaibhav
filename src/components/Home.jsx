import React from 'react'
import '../App.css'
import { BsLinkedin, BsGithub ,BsFileEarmarkPdfFill} from 'react-icons/bs'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container d-flex align-items-center'>
      <div className="container">
        <h1>Hi<span>,</span></h1>
        <h1>I am <span>Vaibhav Pachpute</span></h1>
        <h2>&lt; Full Stack Developer /&gt; </h2>
        <h2>Expertised in <span>
          <Typewriter
            words={['MongoDB', 'Express', 'React', 'Node', 'HTML/CSS', 'Flutter']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          // onType={handleType}
          />
        </span></h2>
        <div>
          <span>
            <a href="https://github.com/VaibhavPachpute21/" target='_blank' rel='noreferrer'> <BsGithub size={35} color="white" /></a>&nbsp;&nbsp; &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/vaibhavpachpute/" target='_blank' rel='noreferrer'><BsLinkedin size={35} color="white" /></a>&nbsp;&nbsp; &nbsp;&nbsp;
            <a href="https://vaibhavpachpute.me/Vaibhav%20Pachpute%20Resume.pdf" target='_blank' rel='noreferrer'><BsFileEarmarkPdfFill size={35} color="white" /></a>
          </span>
        </div>

        <Link className='btn mt-3' to={'/contact'} >Get In Touch</Link>
      </div>

    </div>
  )
}

export default Home