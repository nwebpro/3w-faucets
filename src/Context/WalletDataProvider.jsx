import React, { createContext, useState } from 'react';

export const WalletDataContext = createContext()

const WalletDataProvider = ({ children }) => {
    const [walletDataStore, setWalletDataStore] = useState('Arbitrum Rinkeby')

    const walletData = { 
        setWalletDataStore,
        walletDataStore
    }
    return (
        <WalletDataContext.Provider value={ walletData }>
            { children }
        </WalletDataContext.Provider>
    );
};

export default WalletDataProvider;