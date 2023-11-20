import { useState } from "react";
import "./App.scss";
import Logo from "./assets/logo.svg";
import Illustration from "./assets/illustration-dashboard.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
    const [formData, setFormData] = useState({
        email: "",
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            errors.email = "Please provide a valid email address";
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("Form submitted:", formData);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setFormErrors({
            ...formErrors,
            [name]: "",
        });
    };

    return (
        <main>
            <div className="container">
                <div className="container-content">
                    <img src={Logo} alt="" className="logo" />
                    <h1>
                        We are launching <span>soon!</span>
                    </h1>
                    <h2>Subscribe and get notified</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                className={
                                    formErrors.email ? "error" : undefined
                                }
                            />
                            {formErrors.email && (
                                <>
                                    <p className="error-span">
                                        {formErrors.email}
                                    </p>
                                </>
                            )}
                        </div>
                        <button type="submit" id="submit" title="submit">
                            Notify Me
                        </button>
                    </form>
                    <img
                        src={Illustration}
                        alt="preview"
                        className="illustration"
                    />
                </div>
                <footer>
                    <div className="icons">
                        <div className="icon">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                    <p className="copyright">
                        © Copyright Ping. All rights reserved.
                    </p>
                </footer>
            </div>
        </main>
    );
}

export default App;
