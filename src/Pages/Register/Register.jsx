import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineGoogle, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthPageWrapper } from '../Login/LoginPageStyle';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const handleUserSignUp = e => {
        e.preventDefault()
    }
    return (
        <AuthPageWrapper>
            <Container>
                <div className="auth_form">
                    <h2>Sign Up</h2>
                    <Form onSubmit={handleUserSignUp}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter your email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type={passwordVisible ? "text" : "password"} placeholder="Enter your password" />
                            <div onClick={() => setPasswordVisible(!passwordVisible)}>
                                {
                                    passwordVisible ?
                                    <AiFillEye />
                                    :
                                    <AiFillEyeInvisible />

                                }
                            </div>
                        </Form.Group>
                        <div>
                            <button type="submit">Sign Up</button>
                        </div>
                    </Form>
                    <div className="auth_footer">
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                        <div className="auth_media">
                            <p>Or</p>
                            <div className="media">
                                <AiOutlineGoogle />
                                <AiFillFacebook />
                                <AiFillInstagram />
                                <AiFillGithub />
                                <AiFillLinkedin />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </AuthPageWrapper>
    );
};

export default Register;