import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png";
import NavbarFirst from '../components/NavbarFirst'

const Login = () => {
    return (
        <>
            <NavbarFirst />
            <Template
                title="Welcome back"
                des1="Build Skill for today, Tomorrow and beyond"
                des2="Education to Future proof"
                image={loginImg}
                formType="login"
            />
        </>
    );
};

export default Login;
