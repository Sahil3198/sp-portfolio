import { Link, NavLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CircularProgressBar from '../../Components/ProgressBar/CircularProgressBar';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import constants from '../../config/constants';

const Resume = () => {

    const { theme } = useContext(ThemeContext);

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.hash.slice(1);
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="resume">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 left-col">
                        <nav id="navi">
                            <ul>
                                <li>
                                    <NavLink to="#page-1" onClick={handleClick} className={"resume-link"}>Education</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#page-2" onClick={handleClick} className={"resume-link"}>Experience</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#page-3" onClick={handleClick} className={"resume-link"}>Skills</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#page-4" onClick={handleClick} className={"resume-link"}>Certifications</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-9 right-col">
                        <div id="page-1" className="page one">
                            <h2 className="heading">Education</h2>
                            <div className="resume-card mb-5">
                                <div className="card-header">
                                    <div className="icon">
                                        <span className="education-icon"><SchoolIcon /></span>
                                    </div>
                                    <div className="header-text">
                                        <span className="date float-right">Jan 2022 – April 2023</span>
                                        <h2>Master of Applied Computer Science</h2>
                                        <span className="position">Dalhousie University</span>
                                        <span className="gpa float-right">GPA: 3.89</span>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-card mb-5">
                                <div className="card-header">
                                    <div className="icon">
                                        <span className="education-icon"><SchoolIcon /></span>
                                    </div>
                                    <div className="header-text">
                                        <span className="date float-right">Aug 2015 - May 2019</span>
                                        <h2>Bachelor of Engineering in Computer Engineering</h2>
                                        <span className="position">Gujarat Technological University</span>
                                        <span className="gpa float-right">GPA: 3.46</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="page-2" className="page two">
                            <h2 className="heading">Experience</h2>
                            <div className="resume-card mb-5">
                                <div className="card-header">
                                    <div className="icon">
                                        <span className="work-icon"><WorkIcon /></span>
                                    </div>
                                    <div className="header-text">
                                        <span className="date float-right">Jan 2023 – Present</span>
                                        <h2>IT Developer Co-op</h2>
                                        <span className="position">Canada Revenue Agency</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>Contributed to the development of new features and enhancements of EVMF applications of CRA, which are developed using Java to create templates of documents sent by CRA to users.</li>
                                        <li>Researched and evaluated methods and techniques to solve problems of application, collaborating closely with other members of the development team.</li>
                                        <li>Utilized Agile development methodologies to deliver high-quality Java software in a timely manner, ensuring that projects are completed within budget and to the satisfaction of stakeholders.</li>
                                        <li>Worked with Git and JIRA to manage version control and project management, ensuring that code changes are properly tracked and documented.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="resume-card">
                                <div className="card-header">
                                    <div className="icon">
                                        <span className="work-icon"><WorkIcon /></span>
                                    </div>
                                    <div className="header-text">
                                        <span className="date float-right">Feb 2020 – Nov 2021</span>
                                        <h2>Systems Engineer</h2>
                                        <span className="position">Tata Consultancy Services</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>Experienced in contributing to the architecture of a core banking application called TCS BaNCS, working closely
                                            with clients to understand their requirements and design solutions that meet their needs.</li>
                                        <li>Worked in the development and maintenance of large-scale Java-based BaNCS application, with a proven track
                                            record of successfully implementing new functionalities as per client requirements.</li>
                                        <li>Built a data capture tool using Java, Spring Framework, and Spring Integration, which provides real-time data
                                            replication for the application. Also, it was used to extract, transform, and send data to another outside channel
                                            such as a database, Kafka, or other messaging queues.</li>
                                        <li>Designed and developed a RESTful API using Spring Boot that seamlessly integrates with the data capture tool.</li>
                                        <li>Improved system reliability and scalability by implementing load balancing and failover mechanisms, which gave
                                            faster response times and better overall system performance.</li>
                                        <li>Worked on the extensibility framework of BaNCS, which adds new variables to the UI without changing the code
                                            using Object-Oriented design patterns in Java.</li>
                                        <li>Implemented automated testing using JUnit to ensure high code quality and minimize defects.</li>
                                        <li>Developed a CI/CD pipeline and delivered solutions quickly with complete automation.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="page-3" className="page three">
                            <h2 className="heading">Skills</h2>
                            <div className="row mb-5">
                                <div className="col-md mb-4">
                                    <div className="skill-card">
                                        <div className="skill-title mb-4">
                                            <h2 className="font-weight-bold text-center">Languages</h2>
                                        </div>

                                        <div className="technology mb-4">
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.JAVA_LOGO} />
                                                <span className="content-text">Java</span>
                                            </div>

                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.JAVASCRIPT_LOGO} />
                                                <span className="content-text">JavaScript</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md mb-4">
                                    <div className="skill-card">
                                        <div className="skill-title mb-4">
                                            <h2 className="font-weight-bold text-center">Web Technologies</h2>
                                        </div>

                                        <div className="technology mb-4">
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.HTML_LOGO} />
                                                <span className="content-text">HTML5</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.CSS_LOGO} />
                                                <span className="content-text">CSS3</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.REACT_LOGO} />
                                                <span className="content-text">React</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.REDUX_LOGO} />
                                                <span className="content-text">Redux</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.JSON_LOGO} />
                                                <span className="content-text">JSON</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md mb-4">
                                    <div className="skill-card">
                                        <div className="skill-title mb-4">
                                            <h2 className="font-weight-bold text-center">Frameworks</h2>
                                        </div>
                                        <div className="technology mb-4">
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.SPRING_LOGO} />
                                                <span className="content-text">Spring</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.SPRING_LOGO} />
                                                <span className="content-text">Spring boot</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.NODE_LOGO} />
                                                <span className="content-text">Node.js</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.EXPRESS_LOGO}
                                                    imageColor={theme === "dark" ? "invert(100%) brightness(100%) grayscale(100%) contrast(100%)" : ""} />
                                                <span className="content-text">Express.js</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.JUNIT_LOGO} />
                                                <span className="content-text">JUNIT</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md mb-4">
                                    <div className="skill-card">
                                        <div className="skill-title mb-4">
                                            <h2 className="font-weight-bold text-center">Technologies</h2>
                                        </div>
                                        <div className="technology mb-4">
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.MAVEN_LOGO} />
                                                <span className="content-text">Maven</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.JENKINS_LOGO} />
                                                <span className="content-text">Jenkins</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.KAFKA_LOGO}
                                                    imageColor={theme === "dark" ? "invert(100%) brightness(100%) grayscale(100%) contrast(100%)" : ""} />
                                                <span className="content-text">Kafka</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.DOCKER_LOGO} />
                                                <span className="content-text">Docker</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md mb-4">
                                    <div className="skill-card">
                                        <div className="skill-title mb-4">
                                            <h2 className="font-weight-bold text-center">Database</h2>
                                        </div>
                                        <div className="technology mb-4">
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.MYSQL_LOGO} />
                                                <span className="content-text">MySql</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.MONGODB_LOGO} />
                                                <span className="content-text">MongoDB</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md mb-4">
                                    <div className="skill-card">
                                        <div className="skill-title mb-4">
                                            <h2 className="font-weight-bold text-center">Cloud Technologies</h2>
                                        </div>
                                        <div className="technology mb-4">
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.AWS_LOGO} />
                                                <span className="content-text">Amazon Web Services (AWS)</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.GCP_LOGO} />
                                                <span className="content-text">Google Cloud Platform (GCP)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-md mb-4">
                                    <div className="skill-card">
                                        <div className="skill-title mb-4">
                                            <h2 className="font-weight-bold text-center">Developer tools</h2>
                                        </div>
                                        <div className="technology mb-4">
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.GIT_LOGO} />
                                                <span className="content-text">Git</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.ECLIPSE_LOGO} />
                                                <span className="content-text">Eclipse</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.INTELLIJ_LOGO} />
                                                <span className="content-text">IntelliJ IDEA</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={constants.VSCODE_LOGO} />
                                                <span className="content-text">Visual studio code</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="page-4" className="page four">
                            <h2 className="heading">Certifications</h2>
                            <div className="row mb-5">
                                <div className="col-md-6 mb-4">
                                    <div className="certification-card">
                                        <div className="certification-title mb-4">
                                            <h2 className="font-weight-bold text-center">Azure Fundamentals</h2>
                                        </div>
                                        <div className="certification-content mb-4">
                                            <img src={constants.AZURE_CERTIFICATE_PHOTO} alt="Certification" />
                                            <p><span>Issuing Organization: </span>Microsoft</p>
                                            <p><span>Completion Date: </span>June 12, 2021</p>
                                            <Link to={constants.AZURE_CERTIFICATE_URL} className="btn btn-primary py-3 px-3" target="_blank" rel="noreferrer">View Certification</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Resume;