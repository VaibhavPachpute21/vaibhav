import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { myProjects } from '../assets/data'


const Projects = () => {
  return (
    <div className="projects-container">
      <div className="container">
        {/* <h2>myProjects&#40;&#41;  &#123;</h2> */}
        <h2>&lt;Projects&gt; </h2>
        <div className="container py-2 ps-5">

          <div className="row">
            {myProjects.map((project) => {
              return (
                <>
                  <div className="col-md-4 p-2">
                    <div className="projectBox">
                      <img src={project.thumbnail} width={'100%'} height={'200px'} alt="" />
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="row">
                        <div className='col'>
                          {project.demoLink != null ? <Link className='btn' target='_blank' to={project.demoLink}>View Demo</Link> : <></>}
                        </div>
                        <div className='col'>
                          <Link className='btn' target='_blank' to={project.souce_code}>View Source</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

        </div>
        {/* <h2>&#125;</h2> */}
        <h2>&lt;/Projects&gt;</h2>
      </div>
    </div>
  )
}

export default Projects