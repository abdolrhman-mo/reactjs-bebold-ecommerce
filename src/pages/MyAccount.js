import Footer from "../sections/Footer";
import Nav from "../sections/Nav";
import "../static/sass/MyAccount.sass"

export default function MyAccount () {
    return (
        <>
            <Nav />
            <div className="my-account">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Login</h2>
                            <p>Username or email address</p>
                            <input type="text" />
                            <p>Password</p>
                            <input type="password" name="" id="" />
                            <input type="checkbox" name="" id="" />
                            <span className="gray">Remember me</span>
                            <input type="submit" value="Log in" />
                            <a href="" className="theme-color">Lost your password</a>
                        </div>
                        <div className="col">
                            <h2>Register</h2>
                            <p>Email address</p>
                            <input type="text" />
                            <p>Password</p>
                            <input type="password" name="" id="" />
                            <p className="gray">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                            <input type="submit" value="Register" />
                            <a href="" className="theme-color">Lost your password</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}