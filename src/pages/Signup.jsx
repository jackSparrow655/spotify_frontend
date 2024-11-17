import React from "react";
import signupImg from "../assets/signup.png";
import Template from "../components/Template";
import NavbarFirst from "../components/NavbarFirst";

const Signup = () => {
    return (
        <>
            <NavbarFirst />
            <Template
                title="Welcome back"
                des1="Build Skill for today, Tomorrow and beyond"
                des2="Education to Future proof"
                image={signupImg}
                formType="signup"
            />
        </>
    );
};

export default Signup;
