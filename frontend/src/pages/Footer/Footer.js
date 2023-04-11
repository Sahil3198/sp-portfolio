import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        <footer className="my-footer my-section">
            <div className="my-footer__container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="my-footer-widget mb-4">
                            <h2 className="footer-heading-2">About</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul className="list-icon-social list-unstyled float-md-left float-lft mt-5">
                                <li><a href="https://www.linkedin.com/in/sahilparekh03/"><span className="linkedin-icon"><LinkedInIcon /></span></a></li>
                                <li><a href="https://twitter.com/Sahil546"><span className="twitter-icon"><TwitterIcon /></span></a></li>
                                <li><a href="https://www.instagram.com/sahilparekh03/"><span className="instagram-icon"><InstagramIcon /></span></a></li>
                                <li><a href="https://www.facebook.com/sahil.parekh.94/"><span className="facebook-icon"><FacebookIcon /></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="my-footer-widget mb-4 ml-md-4">
                            <h2 className="footer-heading-2">Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="Home">Home</a></li>
                                <li><a href="About">About</a></li>
                                <li><a href="Services">Services</a></li>
                                <li><a href="Projects">Projects</a></li>
                                <li><a href="Contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="my-footer-widget mb-4">
                            <h2 className="footer-heading-2">Services</h2>
                            <ul className="list-unstyled">
                                <li><a href="Home">Web Design</a></li>
                                <li><a href="Home">Web Development</a></li>
                                <li><a href="Home">Business Strategy</a></li>
                                <li><a href="Home">Data Analysis</a></li>
                                <li><a href="Home">Graphic Design</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="my-footer-widget mb-4">
                            <h2 className="footer-heading-2">Have a Questions ?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li>
                                        <a href="mailto:sahilparekh94@gmail.com">
                                            <span className="icon"><EmailIcon /></span>
                                            sahilparekh94@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copyright">
                            Copyright &copy; All rights reserved | This website is made&nbsp;
                            <span className="favourite-icon mt-4"><FavoriteIcon /></span> by&nbsp; 
                            <a href="https://sahilparekh.com" target="_blank" rel="noreferrer">
                                Sahil Parekh
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;