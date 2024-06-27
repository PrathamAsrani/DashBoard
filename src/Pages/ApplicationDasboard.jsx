import React from 'react'
import Layout from '../Layout/Layout';
import { GoPeople } from "react-icons/go";
import { GrDocumentVerified } from "react-icons/gr";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { SiAdobexd } from "react-icons/si";
import logo from '../images/logo.png'

const ApplicationDasboard = () => {
  return (
    <Layout>
      <div className='top-section'>
        <ul className='top-headings'>
          <li>Job Preview</li>
          <li>Applicants</li>
          <li>Match</li>
          <li>Messages</li>
        </ul>
      </div>
      <div className="main">
        <div className="main-left-section">
          <header className="job-header">
            <h1>Senior Product Designer</h1>
            <p>Delaware, USA - $300k-$400k</p>
            <p className="status">Open</p>
          </header>
          <hr />
          <section className="details">
            <div className="preferences">
              <div className="skills">
                <h2>Skills Required</h2>
                <ul>
                  <li className='req-logos-li'>{<FaFigma className='req-logos' />}Figma</li>
                  <li className='req-logos-li'>{<DiIllustrator className='req-logos' />}Adobe Illustrator</li>
                  <li className='req-logos-li'>{<SiAdobexd className='req-logos' />}Axure XD</li>
                </ul>
              </div>
              <div className="one">
                <h2>Preferred Language</h2>
                <p>English</p>
              </div>
              <div className="two">
                <h2>Type</h2>
                <p>Full time</p>
              </div>
              <div className="three">
                <h2>Years of Experience</h2>
                <p>3 Years</p>
              </div>
            </div>
          </section>
          <hr />
          <section className="job-description">
            <h3>About the Job:</h3>
            <ol>
              <li>Handle the UI/UX research design</li>
              <li>Work on researching on latest web applications designs & trends</li>
              <li>Work on conceptualizing and visualizing</li>
              <li>Work on creating graphics content and other graphical related works</li>
            </ol>
            <h3>Benefits:</h3>
            <ul>
              <li>Health Insurance</li>
              <li>Provident Fund</li>
            </ul>
            <h3>Schedule:</h3>
            <ul>
              <li>Day Shift</li>
            </ul>
            <h3>Supplemental pay types:</h3>
            <ul>
              <li>Performance bonus</li>
              <li>Yearly bonus</li>
            </ul>
            <p>Work Location: In Person</p>
          </section>
          <hr />
          <section className="company-info">
            <img src={logo} alt="Atlassian" className='Footer-logo' loading='lazy' />
            <div className="company-info-bottom-section">
              <ul>
                <li>Company size:</li>
                <p className='company-info-details'>1k-2k Employees</p>
                <li>Type:</li>
                <p className='company-info-details'>Private</p>
                <li>Sector:</li>
                <p className='company-info-details'>Information Technology, Infrastructure</p>
              </ul>
              <ul>
                <li>Funding:</li>
                <p className='company-info-details'>Bootstrapped</p>
                <li>Founded in:</li>
                <p className='company-info-details'>2019</p>
                <li>Founded by:</li>
                <p className='company-info-details'>Scott Farquhar, Mike Cannon-Brookes</p>
              </ul>
            </div>
          </section>
        </div>
        <div className="main-right-section">
          <div className="main-right-section-top">
            <button>Delete Job</button>
            <button>Edit Job</button>
          </div>
          <div className="main-right-section-bottom">
            <h4><GoPeople style={{ marginRight: "1vw" }} />Applicants</h4>
            <h4><GrDocumentVerified style={{ marginRight: "1vw" }} />Matches</h4>
            <h4><BiMessageSquareDetail style={{ marginRight: "1vw" }} />Messages</h4>
            <h4><IoEyeOutline style={{ marginRight: "1vw" }} />Views</h4>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ApplicationDasboard
