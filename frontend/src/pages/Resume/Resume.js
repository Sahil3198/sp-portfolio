import { NavLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CircularProgressBar from '../../Components/ProgressBar/CircularProgressBar';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';

const Resume = () => {

    const javaImage = "https://qph.cf2.quoracdn.net/main-qimg-317f4ff0db8d0ba328fc6d627af72d89";
    const reactImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207";
    const javascriptImage = "https://cdn.worldvectorlogo.com/logos/javascript-1.svg";

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.hash.slice(1);
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="resume" id="resume-section">
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
                            <div className="resume-wrap d-flex ftco-animate">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="education-icon"><SchoolIcon /></span>
                                </div>
                                <div className="text pl-3">
                                    <span className="date float-right">Jan 2022 – April 2023</span>
                                    <h2>Master of Applied Computer Science</h2>
                                    <span className="position">Dalhousie University</span>
                                    <span className="gpa float-right">GPA: 3.89</span>
                                    <p className="mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                            <div className="resume-wrap d-flex ftco-animate">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="education-icon"><SchoolIcon /></span>
                                </div>
                                <div className="text pl-3">
                                    <span className="date float-right">Aug 2015 - May 2019</span>
                                    <h2>Bachelor of Engineering in Computer Engineering</h2>
                                    <span className="position">Gujarat Technological University</span>
                                    <span className="gpa float-right">GPA: 3.46</span>
                                    <p className="mt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                        </div>

                        <div id="page-2" className="page two">
                            <h2 className="heading">Experience</h2>
                            <div className="resume-wrap d-flex ftco-animate">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="work-icon"><WorkIcon /></span>
                                </div>
                                <div className="text pl-3">
                                    <span className="date float-right">Jan 2023 – Present</span>
                                    <h2>IT Developer Co-op</h2>
                                    <span className="position">Canada Revenue Agency</span>
                                    <ul className="mt-3">
                                        <li>Contributed to the development of new features and enhancements of EVMF applications of CRA, which are
                                            developed using Java to create templates of documents sent by CRA to users.</li>
                                        <li>Researched and evaluated methods and techniques to solve problems of application, collaborating closely with other
                                            members of the development team.</li>
                                        <li>Utilized Agile development methodologies to deliver high-quality Java software in a timely manner, ensuring that
                                            projects are completed within budget and to the satisfaction of stakeholders.</li>
                                        <li>Worked with Git and JIRA to manage version control and project management, ensuring that code changes are
                                            properly tracked and documented.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="resume-wrap d-flex ftco-animate">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="work-icon"><WorkIcon /></span>
                                </div>
                                <div className="text pl-3">
                                    <span className="date float-right">Feb 2020 – Nov 2021</span>
                                    <h2>Systems Engineer</h2>
                                    <span className="position">Tata Consultancy Services</span>
                                    <ul className="mt-3">
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

                            <h2 class="heading">Skills</h2>
                            <div class="row progress-circle mb-5">
                                <div class="col-lg-4 mb-4">
                                    <div class="skillCard p-4">
                                        <h2 class="h5 font-weight-bold text-center mb-4">Java</h2>
                                        <CircularProgressBar strokeWidth="10"
                                            sqSize="200"
                                            percentage={80}
                                            image={javaImage} />
                                        <div class="row text-center mt-4">
                                            <div class="col">
                                                <div class="h4 font-weight-bold mb-0">80%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-4">
                                    <div class="skillCard p-4">
                                        <h2 class="h5 font-weight-bold text-center mb-4">React</h2>
                                        <CircularProgressBar strokeWidth="10"
                                            sqSize="200"
                                            percentage={80}
                                            image={reactImage} />
                                        <div class="row text-center mt-4">
                                            <div class="col">
                                                <div class="h4 font-weight-bold mb-0">80%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-4">
                                    <div class="skillCard p-4">
                                        <h2 class="h5 font-weight-bold text-center mb-4">JavaScript</h2>
                                        <CircularProgressBar strokeWidth="10"
                                            sqSize="200"
                                            percentage={80}
                                            image={javascriptImage} />
                                        <div class="row text-center mt-4">
                                            <div class="col">
                                                <div class="h4 font-weight-bold mb-0">80%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <ProgressBar percentage={100} name="HTML" />
                                </div>
                                <div class="col-md-6 animate-box">
                                    <ProgressBar percentage={60} name="CSS" />
                                </div>
                                <div class="col-md-6 animate-box">
                                    <ProgressBar percentage={70} name="NodeJS" />
                                </div>
                                <div class="col-md-6 animate-box">
                                    <ProgressBar percentage={60} name="AWS" />
                                </div>
                                <div class="col-md-6 animate-box">
                                    <ProgressBar percentage={90} name="GIT" />
                                </div>
                                <div class="col-md-6 animate-box">
                                    <ProgressBar percentage={80} name="SpringBoot" />
                                </div>
                            </div>
                        </div>
                        <div id="page-4" className="page four">

                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Resume;