
const About = () => {
    return (
        <section className="about img my-about-section" id="about-section">
            <div className="container about-container">
                <div className="row d-flex no-gutters">
                    <div className="about-left col-md-6 col-lg-6 d-flex">
                        <div className="img-about">
                            <div className="img" />
                        </div>
                    </div>
                    <div className="about-right col-md-6 col-lg-6 pl-md-5 d-flex">
                        <div className="row">
                            <div className="col-md-12 heading-section">
                                <h2 className="mb-4">About Me</h2>
                                <p className="about-para mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <ul className="about-info">
                                    <li className="d-flex"><span>Name:</span> <span>Sahil Parekh</span></li>
                                    <li className="d-flex"><span>Date of birth:</span> <span>January 03</span></li>
                                    <li className="d-flex"><span>Address:</span> <span>Halifax, Canada</span></li>
                                    <li className="d-flex"><span>Email:</span>
                                        <span>
                                            <a href="mailto:sahilparekh94@gmail.com">
                                                <span className="about-email">sahilparekh94@gmail.com</span>
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="counter-wrap col-md-12">
                                <div className="text">
                                    <p>
                                        <a href="https://drive.google.com/file/d/1JPkUD7i7nEws_0kG3Yar4xC-ePk6jZHp/view?usp=share_link" class="btn btn-primary py-3 px-3" target="_blank" rel="noreferrer">
                                            Download Resume
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;