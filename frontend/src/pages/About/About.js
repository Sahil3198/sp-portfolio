import { PROFILE_PIC } from '../../config/constants';

const About = () => {

    return (
        <section className="about my-about-section " id="about-section">
            <div className="container about-container">
                <div className="row d-flex no-gutters">
                    <div className="about-left col-sm col-md-6 col-lg-6 d-flex">
                        <div className="img-about">
                            <div className="img" style={{ backgroundImage: `url(${PROFILE_PIC})` }} />
                        </div>
                    </div>
                    <div className="about-right col-sm col-md-6 col-lg-6 pl-md-5 d-flex">
                        <div className="row">
                            <div className="col-md-12 heading-section">
                                <h2 className="mb-4">About Me</h2>
                                <p align="justify" className="about-para mb-4"><b>Hello,</b> my name is <b>Sahil</b>! 
                                I am a dynamic and innovative software developer with more than <b>3.5 years</b> of experience. 
                                I am passionate about creating elegant and efficient software solutions that solve complex problems and streamline business operations. 
                                My expertise in programming languages such as <b>Java</b> and <b>JavaScript</b> have enabled me to design and develop robust applications that meet the needs of clients across diverse industries. 
                                I have also honed my skills in <b>HTML</b>, <b>CSS</b> and <b>ReactJS</b> to deliver captivating and user-friendly interfaces.</p>
                                <ul className="about-info">
                                    <li className="d-flex"><span>Name:</span> <span>Sahil Parekh</span></li>
                                    <li className="d-flex"><span>Date of birth:</span> <span>January 03</span></li>
                                    <li className="d-flex"><span>Address:</span> <span>Toronto, Canada</span></li>
                                    <li className="d-flex"><span>Email:</span>
                                        <span>
                                            <a href="mailto:sahilparekh94@gmail.com">
                                                <span className="about-email">sahilparekh94@gmail.com</span>
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="counter-wrap col-md-12">
                                <div className="text">
                                    <p>
                                        <a href="https://drive.google.com/file/d/1CYrOLeJUbV45Qs8DAV6BYGOQub3UN8Dp/view?usp=sharing" className="btn btn-primary py-3 px-3" target="_blank" rel="noreferrer">
                                            Download Resume
                                        </a>
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;