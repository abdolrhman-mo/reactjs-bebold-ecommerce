import logo from '../static/imgs/logo-regular.png'
// static files
import '../static/sass/Footer.sass'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Subscribe to our newsletter</h4>
                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder='Your email address...' />
                    </div>
                    <div className="col-md-2">
                        <input type="submit" value="SUBSCIBE" />
                    </div>
                    <div className="col-12">
                        <hr />
                    </div>
                    <div className="col-md-6">
                        <img src={logo} alt="Be Bold" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    <li>
                                        <a href="">Shop All</a>
                                    </li>
                                    <li>
                                        <a href="">Makeup</a>
                                    </li>
                                    <li>
                                        <a href="">Skin Care</a>
                                    </li>
                                    <li>
                                        <a href="">Hair Care</a>
                                    </li>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul>
                                    <li>
                                        <a href="">Refund Policy</a>
                                    </li>
                                    <li>
                                        <a href="">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <i className="fa-brands fa-facebook"></i>
                                <i className="fa-brands fa-twitter"></i>
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                        <hr />
                        <p className='copyright'>
                            Copyright © 2024 Be Bold | Powered by Be Bold
                        </p>
                </div>
            </div>
        </footer>
    )
}