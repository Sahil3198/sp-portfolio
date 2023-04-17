import { useState } from 'react';
import { PROFILE_PIC } from '../../config/constants';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submit] = useState("Send Message");
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <section className="contact">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-6 d-flex">
                        <div className="img-about">
                            <div className="img" style={{ backgroundImage: `url(${PROFILE_PIC})` }} />
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <form onSubmit={handleSubmit} className="p-4 p-md-5 contact-form">
                            <input type="text"
                                className="form-control"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                            <input type="text"
                                className="form-control"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <input type="text"
                                className="form-control"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)} />
                            <textarea name="" id=""
                                cols="30"
                                rows="7"
                                className="form-control"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}/>
                            <div className="d-flex justify-content-center">
                                <input type="submit" value={submit} className="btn btn-primary py-3 px-5" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;