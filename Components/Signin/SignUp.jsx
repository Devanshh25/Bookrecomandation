import React from "react";
import "./signUp.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../firebase/firebase.utils";

import vectorr1 from './vectorr1.svg';
import vectorr2 from './vectorr2.svg';
import vectorr3 from './vectorr3.svg';
import vectorr4 from './vectorr4.svg';
import rectangler4 from './rectangler4.png';

const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignUp = () => {
    const [formfields, setFormFields] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formfields;

    console.log(formfields);

    const resetFormField = () => {
        setFormFields(defaultFormField);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("password do not match");
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormField();
            console.log(response);
        } catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert('cannot create user, email already in use');
            } else {
                console.log('user creation encounter an error', error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formfields, [name]: value });
    }


    return (
        <div className="sign-up-page">
            <div className="group-wrapper">
                <div className="group">
                    <div className="overlap">
                        <div className="frame">
                            <div className="text-wrapper">Welcome Back!</div>
                            <p className="already-have-an">
                                Already have an account ?<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Then Sign-in
                            </p>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group">
                                    <Link className="nav-link" to='/SignIn'>  <div className="rectangle" />
                                        <div className="log-in">LOG IN</div></Link>
                                </div>
                            </div>
                        </div>
                        <div className="div">
                            <div className="text-wrapper-2">Sign Up</div>
                            <div className="frame-2">
                                <div className="div-wrapper">
                                    <div className="vector-wrapper">
                                        <img className="vector" alt="Vector" src={vectorr4} />
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="overlap-2">
                                        <div className="ellipse" />
                                        <img className="img" alt="Rectangle" src={rectangler4} />
                                    </div>
                                </div>
                                <div className="group-2">
                                    <div className="img-wrapper">
                                        <img className="vector-2" alt="Vector" src={vectorr3} />
                                    </div>
                                </div>
                            </div>
                            <p className="p">or create your email account</p>
                            <div className="group-3">
                                <form className="overlap-3" onSubmit={handleSubmit}>
                                    <input className="overlap-3" type='text' placeholder="Display Name" required onChange={handleChange} name="displayName" value={displayName} />
                                    <input className="overlap-32" type='email' placeholder="Email Address" required onChange={handleChange} name="email" value={email} />
                                    <img className="vector-3" alt="Vector" src={vectorr2} />
                                    <input className="overlap-33" type='password' placeholder="Password" required onChange={handleChange} name="password" value={password} />
                                    <input className="overlap-34" type='password' placeholder="confirm Password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                                    <img className="vector-4" alt="Vector" src={vectorr1} />

                                    <button className="rectangle-3" type="submit">Sign Up</button>
                                </form>
                                {/* <form className="overlap-31">
                                    <img className="vector-3" alt="Vector" src={vectorr2} />
                                    <div className="text-wrapper-3">Email</div>
                                </form> */}
                                {/* <form className="overlap-32">
                                    <img className="vector-3" alt="Vector" src={vectorr2} />
                                    <div className="text-wrapper-3">Email</div>
                                </form> */}
                            </div>

                            {/* <div className="group-5" >
                                <div className="overlap-5">
                                    <div className="rectangle-3" />
                                    <div className="sign-up">SIGN UP</div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;