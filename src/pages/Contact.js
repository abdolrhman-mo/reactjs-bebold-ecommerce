import "../static/sass/Contact.sass"
import "../static/sass/Footer.sass"
import Footer from "../sections/Footer"
import Nav from "../sections/Nav"

export default function Contact() {
    return (
        <div className="contact">
            <Nav />
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="aside">
                                <p>GET IN TOUCH</p>
                                <h1>Message Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="aside">
                                <h3 className="title">Contact Us</h3>
                                <p className="body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.
                                </p>
                                <ul className="links-list">
                                    <li>
                                        <a href="" className="link">
                                            <i class="fa-solid fa-location-dot"></i> 123 Fifth Avenue, New York, NY 10160
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="link">
                                            <i class="fa-solid fa-envelope"></i> contact@info.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" className="link">
                                            <i class="fa-solid fa-phone"></i> +20 01068968802
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <form action="">
                                <div className="container">
                                    <h4>Name</h4>
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="">First</label><br />
                                            <input type="text" />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="">Last</label><br />
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <br />
                                    <h4>Email</h4>
                                    <input type="text" />
                                    <br />
                                    <br />
                                    <h4>Message</h4>
                                    <textarea name="" id=""></textarea><br />
                                    <input type="submit" value="SEND" className="cta" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}