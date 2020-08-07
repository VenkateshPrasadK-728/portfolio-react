import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profilepic from './profilepic.png';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={profilepic}
                alt="avatar"
                style={{ height: '300px' }}
              />
            </div>
            <h2 style={{ paddingTop: '0px' }}>Venkatesh Prasad K</h2>
            <h4 style={{ color: 'blue' }}>Software Developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>2+ years experienced Java Developer skilled in planning, coding,
              documentation and testing across the complete development life cycle of a software product.<br />
              Good hands on experience in JAVA 8, JavaScript, XML, MYSQL, ReactJS and NoSQL database like MongoDB.</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5 style={{ color: 'blue' }}>Address</h5>
            <p>3/145/9/6/17/5 <br />Madanapalle <br /> Chittoor <br /> Andhra Pradesh</p>
            <h5 style={{ color: 'blue' }}>DOB</h5>
            <p>28/07/1996</p>
            <h5 style={{ color: 'blue' }}>languages</h5>
            <p>English, Hindi, Telugu, Tamil</p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>

            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear="present"
              jobName="Trainee Engineer"
              companyName="IVTL Infoview Technologies Pvt Ltd"
              jobDescription="Software Developer engages in understanding, designing, developing and testing a software product built for a client from the ground up.
  Developing technical and domain knowledge about ERP Product by using latest technologies and algorithms.
  Improving the quality and speed of deliverability by executing the test scripts on IE, Firefox & Google chrome."/>
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2018}
              schoolName="SASTRA University"
              courseDescription="Graduated with a bachelor's degree in Electrical and Electronics Engineering with a CGPA 
              of 7.6"/>
            <Education
              startYear={2012}
              endYear={2014}
              schoolName="Sri Siddhartha Jr College"
              courseDescription="Completed my intermediate education(HSC)  in Mathematics, Physics and 
              Chemistry with a CGPA of 9.7"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Skills</h2>
            <Skills
              skill="JAVA"
              progress={80}
            />
            <Skills
              skill="HTML/CSS/JS"
              progress={70}
            />
            <Skills
              skill="SPRING FRAMEWORK"
              progress={60}
            />
            <Skills
              skill="REACT JS"
              progress={50}
            />
            <Skills
              skill="MY SQL"
              progress={65}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
