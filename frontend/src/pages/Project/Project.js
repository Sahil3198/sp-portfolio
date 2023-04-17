import { Link } from "react-router-dom";
import { BIDNBARGAIN_SS,BIDNBARGAIN_URL } from '../../config/constants';

const Project = () => {

    return (
        <section className="project" id="project-section">
            <div className="container">
                <h2 className="heading">Projects</h2>
                <div className="row mb-5">
                    <div className="col-md-12 mb-5 d-flex justify-content-center">
                        <div className="project-card">
                            <div className="project-title">
                                <h2 className="font-weight-bold text-center">BidnBargain</h2>
                            </div>
                            <div className="project-header">
                                <img src={BIDNBARGAIN_SS} alt="BidnBargain" />
                            </div>
                            <div className="project-details">
                                <p align="justify" className="mb-3"><span>Description: </span>Addressing some of the existing constraints in eCommerce with our application <b>"Bid n Bargain" (BnB)</b>. BnB will allow users to bargain the price of any item they wish to purchase straight from the dealer. Furthermore, the application allows the user to make a list of all the products they are looking for, a.k.a tender.</p>
                                <p className="mb-3"><span>Technologies used: </span>React.js, Redux, CSS, Material UI, JavaScript, Node.js, Express.js, MongoDB, Socket.io</p>
                                <Link to={BIDNBARGAIN_URL} target="_blank" rel="noreferrer">View Project</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Project;