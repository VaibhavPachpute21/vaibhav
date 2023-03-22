import React from 'react'
import '../App.css'


const Skills = () => {
  return (
    <div className="skills-container">
      <div className="container">
        {/* <h2>mySkills&#40;&#41;  &#123;</h2> */}
        <h2>&lt;MySkills&gt; </h2>

        <div className="container d-flex  align-items-center">
          <div className="row py-md-5">
            <div className="box"><img src={require("../assets/tech/html.png")} alt="html" title="html" /></div>
            <div className="box"><img src={require("../assets/tech/css.png")} alt="css" title="css"/></div>
            <div className="box"><img src={require("../assets/tech/javascript.png")} alt="javascript" title="javascript" /></div>
            <div className="box"><img src={require("../assets/tech/mongodb.png")} alt="mongoDB" title="mongoDB" /></div>
            <div className="box"><img src={require("../assets/tech/reactjs.png")} alt="ReactJs" title="ReactJs" /></div>
            <div className="box"><img src={require("../assets/tech/nodejs.png")} alt="nodejs" title="nodeJs" /></div>
            <div className="box"><img src={require("../assets/tech/ExpressJs.png")} alt="expresJs" title="expressJs" /></div>
            <div className="box"><img src={require("../assets/tech/Bootstrap.png")} alt="boostrap" title="bootstrap" /></div>
            <div className="box"><img src={require("../assets/tech/redux.png")} alt="redux" title="redux" /></div>
            <div className="box"><img src={require("../assets/tech/git.png")} alt="git" title="git" /></div>
            <div className="box"><img src={require("../assets/tech/Flutter.png")} alt="flutter" title="Flutter" /></div>
            <div className="box"><img src={require("../assets/tech/WordPress.png")} alt="wordpress" title="wordpress" /></div>
          </div>
        </div>
        <h2>&lt;MySkills&gt; </h2>
        {/* <h2>&#125;</h2> */}
      </div>
    </div>
  )
}

export default Skills