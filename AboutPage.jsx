import React from "react";
import image from "../assets/codeforces.png";
import image2 from "../assets/codechef.png";
import image3 from "../assets/hackerank.jpg";

const AboutPage = () => {
  return (
    <>
  <div className="full-about">
      <div id="education">
        <div className="content">
          <h3>Education</h3>
          <br />
          <p>
          Indian Institute of Technology (ISM) Dhanbad
          <br/>
           B.Tech in Computer Science and Engineering • Current CGPA: 9.44
          <br /><br/>
          Sanskar Public School, Gwalior 
          <br/>
          PCM with Physical Education • Scored 94.2%
          </p>
        </div>
      </div>
      <div id="aboutMe">
  <div className="content">
    <h3>Me as a Competitive Coder</h3>
    <div className="coding-platforms">
      
    <a
              href="https://codeforces.com/profile/aditya_5240"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
            >
              <img src={image}></img>
              <p>Codeforces</p>
      </a>
      <a
        href="https://www.codechef.com/users/adityajain04"
        target="_blank"
        rel="noopener noreferrer"
        className="card"
      >
        <img src={image2}></img>
        <p>CodeChef</p>
      </a>

      <a
        href="https://www.hackerrank.com/profile/adityagwl2004"
        target="_blank"
        rel="noopener noreferrer"
        className="card"
      >
        <img src={image3}></img>
        <p>HackerRank</p>
      </a>
    </div>
  </div>
</div>
</div>
    </>
  );
};
export default AboutPage;
