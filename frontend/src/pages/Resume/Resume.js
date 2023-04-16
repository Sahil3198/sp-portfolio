import { NavLink } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import CircularProgressBar from '../../Components/ProgressBar/CircularProgressBar';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const Resume = () => {

    const { theme } = useContext(ThemeContext);

    const javaLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fjava-logo.svg?alt=media&token=6cab8d59-b0c4-476a-a5eb-cbeb5ee2bb8c";
    const javascriptLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fjavascript-logo.svg?alt=media&token=0cc38979-130f-4871-8ebf-b81d9c8e9350";

    const htmlLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fw3_html5-logo.svg?alt=media&token=ed925950-7771-49d1-beb9-39dcc25b5b82";
    const cssLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fw3_css-logo.svg?alt=media&token=cd02d0ad-b65b-4d7c-a73d-920961bbe7f3";
    const reactLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Freactjs-logo.svg?alt=media&token=1143f24a-b914-4cc0-aa70-ff0faea16329";
    const reduxLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fredux-logo.svg?alt=media&token=d17dee10-35dc-4ee4-ae93-43642c4b03be";
    const jsonLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fjson-logo.svg?alt=media&token=41052645-0fe9-4806-92fb-b4ca521e28ce";

    const springLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fspringio-logo.svg?alt=media&token=4d2744ba-a761-4b22-b166-01ca7170f659";
    const nodejsLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fnodejs-logo.svg?alt=media&token=25efb9c1-e4ea-49ed-9570-5a5956f0d441";
    const expressjsLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fexpressjs-logo.svg?alt=media&token=55b184af-1292-4085-ba86-1d59fbeea622";
    const jenkinsLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fjenkins-logo.svg?alt=media&token=028d9321-be60-4f63-b615-fccc95544dd0";
    const mavenLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fmaven-logo.svg?alt=media&token=9a7c30a1-50a3-4881-a3b8-9a2132a0d181";
    const kafkaLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fapache_kafka-logo.svg?alt=media&token=d04c495c-7bae-49d8-a254-7879918c4ea9";
    const dockerLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fdocker-logo.svg?alt=media&token=b6fdf320-2d0d-4dbf-b971-40567aa8d7a8";
    const junitLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fjunit5-logo.png?alt=media&token=1012fdba-b4bd-4de0-a57a-f0f292b15c7f";

    const mysqlLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fmysql-logo.svg?alt=media&token=2bc9cd52-3b9e-4fe9-9395-beb4e348cbe5";
    const mongodbLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fmongodb-logo.svg?alt=media&token=f9bb4e27-c5b8-4a0d-b136-789c4546a5ef";

    const awsLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Famazon_aws-icon.svg?alt=media&token=2dd1a0b0-264b-4b43-a3bf-b3291f379427";
    const gcpLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fgoogle_cloud-icon.svg?alt=media&token=cd8588dd-5c04-4d22-9f33-1615eab61ed0";

    const gitLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fgit-scm-logo.svg?alt=media&token=884718ce-f3b9-4225-9d31-c2026b1a544c";
    const eclipseLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Feclipse-logo.svg?alt=media&token=5c90bf28-ac6f-4cff-8430-09a00af81bcb";
    const intellijLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2FIntelliJ_IDEA_logo.svg?alt=media&token=2f0a5adb-246f-4a7d-a8b4-adf5dbad971b";
    const vscodeLogo = "https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Logo%2Fvisualstudio_code-icon.svg?alt=media&token=584c141e-75f8-4ff1-9996-4fb22bfa5761";

    const handleClick = (e) => {
        e.preventDefault();
        const id = e.target.hash.slice(1);
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="resume" id={theme}>
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
                            <div class="resume-card mb-5">
                                <div class="card-header">
                                    <div class="icon">
                                        <span className="education-icon"><SchoolIcon /></span>
                                    </div>
                                    <div class="header-text">
                                        <span className="date float-right">Jan 2022 – April 2023</span>
                                        <h2>Master of Applied Computer Science</h2>
                                        <span className="position">Dalhousie University</span>
                                        <span className="gpa float-right">GPA: 3.89</span>
                                    </div>
                                </div>
                            </div>
                            <div class="resume-card mb-5">
                                <div class="card-header">
                                    <div class="icon">
                                        <span className="education-icon"><SchoolIcon /></span>
                                    </div>
                                    <div class="header-text">
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
                            <div class="resume-card mb-5">
                                <div class="card-header">
                                    <div class="icon">
                                        <span class="work-icon"><WorkIcon /></span>
                                    </div>
                                    <div class="header-text">
                                        <span class="date float-right">Jan 2023 – Present</span>
                                        <h2>IT Developer Co-op</h2>
                                        <span class="position">Canada Revenue Agency</span>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <ul>
                                        <li>Contributed to the development of new features and enhancements of EVMF applications of CRA, which are developed using Java to create templates of documents sent by CRA to users.</li>
                                        <li>Researched and evaluated methods and techniques to solve problems of application, collaborating closely with other members of the development team.</li>
                                        <li>Utilized Agile development methodologies to deliver high-quality Java software in a timely manner, ensuring that projects are completed within budget and to the satisfaction of stakeholders.</li>
                                        <li>Worked with Git and JIRA to manage version control and project management, ensuring that code changes are properly tracked and documented.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="resume-card">
                                <div class="card-header">
                                    <div class="icon">
                                        <span class="work-icon"><WorkIcon /></span>
                                    </div>
                                    <div class="header-text">
                                        <span class="date float-right">Feb 2020 – Nov 2021</span>
                                        <h2>Systems Engineer</h2>
                                        <span class="position">Tata Consultancy Services</span>
                                    </div>
                                </div>
                                <div class="card-body">
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
                                                    image={javaLogo} />
                                                <span className="content-text">Java</span>
                                            </div>

                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={javascriptLogo} />
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
                                                    image={htmlLogo} />
                                                <span className="content-text">HTML5</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={cssLogo} />
                                                <span className="content-text">CSS3</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={reactLogo} />
                                                <span className="content-text">React</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={reduxLogo} />
                                                <span className="content-text">Redux</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={jsonLogo} />
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
                                                    image={springLogo} />
                                                <span className="content-text">Spring</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={springLogo} />
                                                <span className="content-text">Spring boot</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={nodejsLogo} />
                                                <span className="content-text">Node.js</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={expressjsLogo}
                                                    imageColor={theme === "dark" ? "invert(100%) brightness(100%) grayscale(100%) contrast(100%)" : ""} />
                                                <span className="content-text">Express.js</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={junitLogo} />
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
                                                    image={mavenLogo} />
                                                <span className="content-text">Maven</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={jenkinsLogo} />
                                                <span className="content-text">Jenkins</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={kafkaLogo}
                                                    imageColor={theme === "dark" ? "invert(100%) brightness(100%) grayscale(100%) contrast(100%)" : ""} />
                                                <span className="content-text">Kafka</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={dockerLogo} />
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
                                                    image={mysqlLogo} />
                                                <span className="content-text">MySql</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={mongodbLogo} />
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
                                                    image={awsLogo} />
                                                <span className="content-text">Amazon Web Services (AWS)</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={gcpLogo} />
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
                                                    image={gitLogo} />
                                                <span className="content-text">Git</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={eclipseLogo} />
                                                <span className="content-text">Eclipse</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={intellijLogo} />
                                                <span className="content-text">IntelliJ IDEA</span>
                                            </div>
                                            <div className="technology-content">
                                                <CircularProgressBar strokeWidth="7"
                                                    sqSize="100"
                                                    percentage={100}
                                                    image={vscodeLogo} />
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
                                    <div class="certification-card">
                                        <div className="certification-title mb-4">
                                            <h2 className="font-weight-bold text-center">Azure Fundamentals</h2>
                                        </div>
                                        <div className="certification-content mb-4">
                                            <img src="https://firebasestorage.googleapis.com/v0/b/sahil-portfolio-7727b.appspot.com/o/Certification%2FAzure_fundamentals.png?alt=media&token=ccbb589f-6be3-4eb0-bcf3-7505a794b2c7" alt="Certification" />
                                            <p><span>Issuing Organization: </span>Microsoft</p>
                                            <p><span>Completion Date: </span>June 12, 2021</p>
                                            <a href="https://www.credly.com/badges/982c0c41-14c4-4799-aecf-4610dd6e06c0" className="btn btn-primary py-3 px-3" target="_blank" rel="noreferrer">View Certification</a>
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