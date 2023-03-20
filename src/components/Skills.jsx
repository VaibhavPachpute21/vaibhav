import React from 'react'
import '../App.css'


const Skills = () => {
  return (
    <div className="skills-container">
      <div className="container">
        <h2>mySkills&#40; &#41;  &#123;</h2>

        <div className="container">
          <div className="row py-md-5">
            <div className="box"><img src={require("../assets/tech/html.png")} alt="html" /></div>
            <div className="box"><img src={require("../assets/tech/css.png")} alt="css" /></div>
            <div className="box"><img src={require("../assets/tech/javascript.png")} alt="javascript" /></div>
            <div className="box"><img src={require("../assets/tech/mongodb.png")} alt="mongoDB" /></div>
            <div className="box"><img src={require("../assets/tech/reactjs.png")} alt="ExpresJs" /></div>
            <div className="box"><img src={require("../assets/tech/nodejs.png")} alt="html" /></div>
            <div className="box"><img src={require("../assets/tech/ExpressJs.png")} alt="expresJs" /></div>
            <div className="box"><img src={require("../assets/tech/Bootstrap.png")} alt="boostrap" /></div>
            <div className="box"><img src={require("../assets/tech/redux.png")} alt="redux" /></div>
            <div className="box"><img src={require("../assets/tech/git.png")} alt="git" /></div>
            <div className="box"><img src={require("../assets/tech/Flutter.png")} alt="flutter" /></div>
            <div className="box"><img src={require("../assets/tech/WordPress.png")} alt="wordpress" /></div>
          </div>
        </div>
        <h2>&#125;</h2>
      </div>
    </div>
  )
}

export default Skills