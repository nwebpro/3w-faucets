import React, { useContext, useState } from 'react';
import { Container, Dropdown, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HeaderWrapper, LogoArea, NavStyle } from './HeaderStyle';
import { FaRegUserCircle } from 'react-icons/fa'
import { HiOutlineFolderOpen } from 'react-icons/hi'
import metaMask from '../../assets/MetaMask.551edf10.svg'
import walletConnect from '../../assets/WalletConnect.d0b10794.svg'
import { WalletDataContext } from '../../Context/WalletDataProvider';


const walletData = [
    {
        text: "Arbitrum Rinkeby",
    },
    {
        text: "Avalanche Fuji",
    },
    {
        text: "BNB Chain Testnet",
    },
    {
        text: "Ethereum Rinkeby",
    },
    {
        text: "Fantom Testnet",
    },
    {
        text: "Harmony Testnet",
    },
    {
        text: "POA Network Sokol",
    },
    {
        text: "Polygon Mumbai",
    }
]


const Header = () => {
    const [show, setShow] = useState(false);
    const { setWalletDataStore, walletDataStore } = useContext(WalletDataContext)


    const handleClose = () => setShow(false);
    
    const handleShow = () => setShow(true);

    console.log(walletDataStore);

    return (
        <NavStyle>
            <Container>
                <HeaderWrapper>
                    <LogoArea>
                        <Link to="/">Faucets</Link>
                    </LogoArea>
                    <div className='header_content_area'>
                        <div className="network_selector">
                            <div className='d-flex align-items-center gap-2'>
                                <div className="network_list">
                                    <Form.Select  onChange={(e) => setWalletDataStore(e.target.value)}>
                                        {
                                            walletData.map((item, i) => (
                                                <option key={i} value={item.text}>{ item.text }</option>
                                            ))
                                        }
                                    </Form.Select>
                                </div>
                                <div className="connect_wlt_btn">
                                    <button onClick={handleShow}>
                                        <HiOutlineFolderOpen />
                                        <span>Connect Wallet</span>
                                    </button>
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title>Connect your wallet</Modal.Title>
                                            </Modal.Header>
                                        <Modal.Body>
                                            <div className='d-flex justify-content-between align-content-center text-center'>
                                                <div className='modal_item'>
                                                    <img src={metaMask} alt="MetaMask" />
                                                    <h4>MetaMask</h4>
                                                </div>
                                                <div className='modal_item'>
                                                    <img src={walletConnect} alt="WalletConnect" />
                                                    <h4>WalletConnect</h4>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                        <Dropdown>
                            <Dropdown.Toggle className="user_toggler" id="dropdown-basic">
                                <FaRegUserCircle />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Link to='/login'>Login</Link>
                                <Link to='/signup'>Sign Up</Link>
                                <Link to='/faq'>FAQ</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </HeaderWrapper>
            </Container>
        </NavStyle>
    );
};

export default Header;