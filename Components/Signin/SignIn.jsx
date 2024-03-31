import React from "react";
import "./signIn.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../src/contexts/usercontext";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithFacebookPopup } from "../firebase/firebase.utils";
import { Outlet } from "react-router-dom";
import vectorl1 from './vectorl1.svg';
import vectorl2 from './vectorl2.svg';
import vectorl3 from './vectorl3.svg';
import vectorl4 from './vectorl4.svg';
import rectanglel4 from './rectanglel4.png';


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const logFacebookUser = async () => {
        const { user } = await signInWithFacebookPopup();
        console.log({ user });
    }
    // const successCallback = (position) => {
    //     console.log(position);
    // };

    // const errorCallback = (error) => {
    //     console.log(error);
    // };

    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    return (
        <div>

            <div className="log-in-page">
                <div className="group-wrapper">
                    <div className="group">
                        <div className="overlap">
                            <div className="frame">
                                <div className="text-wrapper">Welcome Back!</div>
                                <p className="div">Enter Your Personal Realm: Create Your Unique Profile</p>
                                <div className="overlap-group-wrapper">
                                    <div className="overlap-group">
                                        <Link className="nav-link" to="/SignUp"> <div className="rectangle" />
                                            <div className="sign-up">
                                                SIGN UP
                                            </div></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-2">
                                <div className="text-wrapper-2">Log in</div>
                                <div className="frame-3">
                                    <div className="div-wrapper">
                                        <div className="vector-wrapper">
                                            <button><img className="vector" alt="Vector" src={vectorl4} onClick={logFacebookUser} /></button>
                                        </div>
                                    </div>
                                    <div className="overlap-wrapper">
                                        <div className="overlap-2">
                                            <div className="ellipse" />
                                            <button><img className="img" alt="Rectangle" src={rectanglel4} onClick={logGoogleUser} /></button>

                                        </div>
                                    </div>
                                    <div className="group-2">
                                        <div className="img-wrapper">
                                            <img className="vector-2" alt="Vector" src={vectorl3} />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-wrapper-3">Forgot Password</div>
                                <p className="p">or use your email account</p>
                                <div className="group-3">
                                    <div className="overlap-3">
                                        <img className="vector-3" alt="Vector" src={vectorl2} />
                                        <div className="text-wrapper-4">Email</div>
                                    </div>
                                </div>
                                <div className="group-4">
                                    <div className="overlap-4">
                                        <img className="vector-4" alt="Vector" src={vectorl1} />
                                        <div className="text-wrapper-5">Password</div>
                                        <div className="rectangle-2" />
                                    </div>
                                </div>
                                <div className="group-5">
                                    <div className="overlap-5">
                                        <div className="rectangle-3" />
                                        <div className="log-in">LOG IN</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>

    );
};


export default SignIn;