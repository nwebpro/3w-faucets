import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { ContentTitle, FormWarning, FormWrapper, TestnetWrapperStyle, WalletForm } from './TestWrapper';
import { RiAlertFill } from 'react-icons/ri'
import ReCAPTCHA from "react-google-recaptcha";

const TestnetWrapper = () => {
    const [verified, setVerified] = useState(false)

    const handleReCaptcha = value => {
        setVerified(true)
    }
    return (
        <TestnetWrapperStyle>
            <Container>
                <ContentTitle>
                    <h2>Request testnet LINK </h2>
                    <p>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
                </ContentTitle>
                <FormWrapper>
                    <FormWarning>
                        <RiAlertFill />
                        <p>Your wallet is connected to <span>{`Harmony Testnet`}</span>, so you are requesting <span>{`Harmony Testnet`}</span> Link/ETH.</p>
                    </FormWarning>
                    <WalletForm>
                        <Form>
                            <Form.Group>
                                <Form.Label>Wallet Address</Form.Label>
                                <Form.Control type="text" placeholder="Wallet Address..." />
                            </Form.Group>
                            <Form.Group className='mt-2'>
                                <Form.Label>Request Type</Form.Label>
                                <div className='d-flex'>
                                    <Form.Control className='me-4' type="text" value='20 Test Link' disabled />
                                    <Form.Control type="text" value='0.5 ETH' disabled />
                                </div>
                            </Form.Group>
                            <ReCAPTCHA
                                className='mt-3'
                                sitekey={`${process.env.reCAPTCHA_SITE_KEY}`}
                                onChange={handleReCaptcha}
                            />
                            <Button variant="primary" type="submit" disabled={ !verified }>
                                Submit
                            </Button>
                        </Form>
                    </WalletForm>
                </FormWrapper>
            </Container>
        </TestnetWrapperStyle>
    );
};

export default TestnetWrapper;