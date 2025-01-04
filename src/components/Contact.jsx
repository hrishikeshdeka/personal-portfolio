
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact__content">
                    <div className="contact__title">
                        <p>Contact</p>
                        <h3>Let's Collaborate! Reach me with a click.</h3>
                    </div>
                    <div className="contact__icons">
                        
                        <span>
                            <a href="https://github.com/hrishikeshdeka" id="profile-link" target="_blank" className="btn contact-details">
                                <i className="fab fa-github"> Github</i>
                            </a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/hrishikesh-deka/" id="profile-link" target="_blank"
                                className="btn contact-details">
                                <i className="fab fa-linkedin"> LinkedIn</i>
                            </a>
                        </span>
                        <span>
                            <a href="mailto:hrishikeshdeka2001@gmail.com" id="profile-link" target="_blank" className="btn contact-details">
                                <i className="fab fa-at">Email</i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;