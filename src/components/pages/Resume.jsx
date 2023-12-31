import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faHtml5,faCss3Alt,faSquareJs,faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import './Resume.css'

export default function Resume(){
  return (
      <div className='text-center py-5' id='resume-container'>
      <h1>Resume </h1>
      <div className="row my-5 ">
          <div className="w-100">
              <section className='my-2'>
                  <h3>
                      Front-end Proficiencies
                  </h3>
              <ul>
                  <li> <FontAwesomeIcon icon={faHtml5} /> HTML</li>
                  <li> <FontAwesomeIcon icon={faCss3Alt} /> CSS</li>
                  <li> <FontAwesomeIcon icon={faSquareJs} /> JavaScript</li>
                  <li>jQuery</li>
                  <li>Responsive Web Design</li>
                  <li><FontAwesomeIcon icon={faReact} /> React</li>
                  <li><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
                  <li>Bulma</li>
              </ul>
              </section>
              <section>
                  <h3>
                      Back-end Proficiencies
                  </h3>
              <ul>
                  <li>Rest APIs</li>
                  <li><FontAwesomeIcon icon={faNodeJs} /> Node</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB</li>
              </ul>
              </section>
              <a href="src/resume/Shawn Bunch Resume - June '23.docx" download={true}><button className='btn rounded-pill px-5' id='resume-btn'><h3>Download Resume</h3></button></a>
          </div>
         

      </div>
      </div>
  )
}