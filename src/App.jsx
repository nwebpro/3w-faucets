import React from 'react';
import Header from './Component/Navbar/Header';
import Notice from './Component/Notice/Notice';
import TestnetWrapper from './Component/TestnetWrapper/TestnetWrapper';

const App = () => {
    return (
        <>
            <Header />
            <Notice />
            <TestnetWrapper />
        </>
    );
};

export default App;