import React from 'react';
import img1 from "../assets/cpp.png";
import img2 from "../assets/js-image.jpg"; 
import img3 from "../assets/firebase.png"; 
import img4 from "../assets/react.png"; 
import img5 from "../assets/html-5-logo-png-transparent.png";
import img6 from "../assets/CSS.3.png"; 
import img7 from "../assets/git.png";
import img8 from "../assets/img8.png"


const Skill = () => {
  return (
    <div className='skill-container'>
    <br/>
    <br/>
      <div className='skill-category'>
        <h2 className='category-title'>Programming Languages</h2>
        <div className='skill'>
          <div className='skill-item'>
            <img className='sklimg' src={img1} alt="C++"/>
            <p>C++</p>
          </div>
          <div className='skill-item'>
            <img className='sklimg' src={img2} alt="JavaScript"/>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
<br/>
      <div className='skill-category'>
        <h2 className='category-title'>Databases</h2>
        <div className='skill'>
          <div className='skill-item'>
            <img className='sklimg' src={img3} alt="Firebase"/>
            <p>Firebase</p>
          </div>
        </div>
      </div>
<br/>
      <div className='skill-category'>
        <h2 className='category-title'>Web Development</h2>
        <div className='skill'>
          <div className='skill-item'>
            <img className='sklimg' src={img4} alt="React"/>
            <p>React</p>
          </div>
          <div className='skill-item'>
            <img className='sklimg' src={img5} alt="HTML"/>
            <p>HTML</p>
          </div>
          <div className='skill-item'>
            <img className='sklimg' src={img6} alt="CSS"/>
            <p>CSS</p>
          </div>
          <div className='skill-item'>
            <img className='sklimg' src={img8} alt="Bootstrap"/>
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
<br/>
      <div className='skill-category'>
        <h2 className='category-title'>Others</h2>
        <div className='skill'>
          <div className='skill-item'>
            <img className='sklimg' src={img7} alt="Git"/>
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
