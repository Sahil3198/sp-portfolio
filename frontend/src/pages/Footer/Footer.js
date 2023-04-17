import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <footer className="my-footer my-section " id={theme}>
            <div className="container footer_container">
                <div className="row">
                    <div className="col-md">
                        <div className="my-footer-widget mb-4">
                            <h2 className="footer-heading-2">About</h2>
                            <p>Sahil Parekh is a tech enthusiast who thrives on creating elegant and efficient software solutions.</p>

                        </div>
                    </div>
                    <div className="col-md">
                        <div className="my-footer-widget mb-4 ml-md-4">
                            <h2 className="footer-heading-2">Links</h2>
                            <ul className="list-unstyled" onClick={scrollToTop}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="resume">Resume</Link></li>
                                {/* <li><Link to="blog">Blog</Link></li> */}
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="my-footer-widget mb-4">
                            <h2 className="footer-heading-2">Projects</h2>
                            <ul className="list-unstyled">
                                <li><Link to="http://www.bidnbargain.com/" target="_blank">Bidnbargain</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="my-footer-widget mb-4">
                            <h2 className="footer-heading-2">Have a Questions ?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li>
                                        <Link to="mailto:sahilparekh94@gmail.com">
                                            <span className="icon"><EmailIcon /></span>
                                            sahilparekh94@gmail.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <ul className="list-icon-social list-unstyled">
                            <li><Link to="https://www.linkedin.com/in/sahilparekh03/" target="_blank"><span className="linkedin-icon"><LinkedInIcon /></span></Link></li>
                            <li><Link to="https://github.com/Sahil3198" target="_blank"><span className="github-icon"><GitHubIcon /></span></Link></li>
                            <li><Link to="https://twitter.com/Sahil546" target="_blank"><span className="twitter-icon"><TwitterIcon /></span></Link></li>
                            <li><Link to="https://www.instagram.com/sahilparekh03/" target="_blank"><span className="instagram-icon"><InstagramIcon /></span></Link></li>
                            <li><Link to="https://www.facebook.com/sahil.parekh.94/" target="_blank"><span className="facebook-icon"><FacebookIcon /></span></Link></li>
                        </ul>
                        <p className="copyright">
                            Copyright &copy; All rights reserved | This website is made&nbsp;
                            <span className="favourite-icon"><FavoriteIcon /></span> by&nbsp;
                            <Link to="https://parekhsahil.com" target="_blank" rel="noreferrer">
                                Sahil Parekh
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;