import React from 'react';
import Notice from '../../Component/Notice/Notice';
import TestnetWrapper from '../../Component/TestnetWrapper/TestnetWrapper';

const Home = ({ walletDataStore }) => {
    return (
        <>
            <Notice />
            <TestnetWrapper />
        </>
    );
};

export default Home;