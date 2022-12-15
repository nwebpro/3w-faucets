import React, { useContext } from 'react';
import { Container, Form, Tab, Tabs } from 'react-bootstrap';
import { ContentTitle, FormWarning, FormWrapper, RequestHistory, TestnetWrapperStyle, WalletForm } from './TestWrapper';
import { RiAlertFill } from 'react-icons/ri'
import ReCAPTCHA from "react-google-recaptcha";
import { WalletDataContext } from '../../Context/WalletDataProvider';

const ethTransactionHistory = [
    {
        "time": "12:30 AM",
        "amount": "487",
        "hash": "4s8er5s5fe57rjmxnfuewrurks"
    },
    {
        "time": "10:30 AM",
        "amount": "875",
        "hash": "sf7s7ers4e7r7wser"
    },
    {
        "time": "11:30 AM",
        "amount": "797",
        "hash": "se4s7er7"
    }
]

const testLinkTransactionHistoryData = [
    {
        "time": "08:30 AM",
        "amount": "748",
        "hash": "7s7effkeurusue4"
    },
    {
        "time": "10:23 AM",
        "amount": "974",
        "hash": "sfe7r7sr4fer"
    },
    {
        "time": "11:10 AM",
        "amount": "874",
        "hash": "s4e7s8er"
    }
]

const TestnetWrapper = () => {
    const { walletDataStore } = useContext(WalletDataContext)

    const handleReCaptcha = value => {
        console.log('ReCaptcha Clicked');
    }

    const handleSubmit = e => {
        e.preventDefault()
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
                        <p>Your wallet is connected to <span>{walletDataStore}</span>, so you are requesting <span>{walletDataStore}</span> Link/ETH.</p>
                    </FormWarning>
                    <WalletForm>
                        <Form onSubmit={handleSubmit}>
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
                                className='mt-3 mb-3'
                                sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                                onChange={handleReCaptcha}
                            />
                            <button type="submit">
                                Send Request
                            </button>
                        </Form>
                    </WalletForm>
                    <RequestHistory>
                        <h2>Request History</h2>
                        <Tabs
                            defaultActiveKey="ethTransactionHistory"
                            transition={false}
                            className="mb-3"
                            >
                            <Tab eventKey="ethTransactionHistory" title="ETH Transaction History">
                                <table>
                                    <thead>
                                        <tr>
                                        <th>Sr</th>
                                        <th>Time</th>
                                        <th>Amount</th>
                                        <th>Hash</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            ethTransactionHistory.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{ i + 1 }</td>
                                                    <td>{item.time}</td>
                                                    <td>{item.amount}</td>
                                                    <td>{item.hash}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </Tab>
                            <Tab eventKey="testLinkTransactionHistory" title="TestLink Transaction History">
                                <table>
                                    <thead>
                                        <tr>
                                        <th>Sr</th>
                                        <th>Time</th>
                                        <th>Amount</th>
                                        <th>Hash</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            testLinkTransactionHistoryData.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{ i + 1 }</td>
                                                    <td>{item.time}</td>
                                                    <td>{item.amount}</td>
                                                    <td>{item.hash}</td>
                                                </tr>
                                            ))
                                        }
                                        
                                    </tbody>
                                </table>
                            </Tab>
                        </Tabs>
                    </RequestHistory>
                </FormWrapper>
            </Container>
        </TestnetWrapperStyle>
    );
};

export default TestnetWrapper;