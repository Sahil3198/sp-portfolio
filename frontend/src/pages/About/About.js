
const About = () => {
    return (
        <section class="about img my-about-section" id="about-section">
            <div class="container about-container">
                <div class="row d-flex no-gutters">
                    <div class="about-left col-md-6 col-lg-6 d-flex">
                        <div class="img-about">
                            <div class="img" />
                        </div>
                    </div>
                    <div class="about-right col-md-6 col-lg-6 d-flex">
                        <div class="row">
                            <div class="col-md-12 heading-section">
                                <h2 class="mb-4">About Me</h2>
                                <p class="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <ul class="about-info">
                                    <li class="d-flex"><span>Name:</span> <span>Sahil Parekh</span></li>
                                    <li class="d-flex"><span>Date of birth:</span> <span>January 03, 1998</span></li>
                                    <li class="d-flex"><span>Address:</span> <span>Halifax, Canada</span></li>
                                    <li class="d-flex"><span>Zip code:</span> <span>B3J 2K9</span></li>
                                    <li class="d-flex"><span>Email:</span> <span><a href="mailto:sahilparekh94@gmail.com">
                                        <span className="text">sahilparekh94@gmail.com</span></a></span></li>
                                    <li class="d-flex"><span>Phone: </span> <span>+1 902 (412) 9680</span></li>
                                </ul>
                            </div>
                        
                        <div class="counter-wrap col-md-12 justify-content-center">
                            <div class="text">
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