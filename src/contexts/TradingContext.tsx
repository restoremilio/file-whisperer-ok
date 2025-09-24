import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useDerivAPI } from '@/hooks/useDerivAPI';

interface TradingContextType {
  isConnected: boolean;
  isAuthorized: boolean;
  currentPrice: number | null;
  balance: any;
  portfolio: any;
  subscribeTo: (symbol: string) => void;
  buyContract: (contractData: any) => void;
  sellContract: (contractId: string) => void;
  tickData: any;
  digitAnalysis: {
    even: number;
    odd: number;
    over: number;
    under: number;
    matches: number;
    differs: number;
  };
}

const TradingContext = createContext<TradingContextType | undefined>(undefined);

export const TradingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { 
    isConnected, 
    isAuthorized, 
    tickData, 
    balance, 
    portfolio, 
    subscribeTo, 
    buyContract, 
    sellContract 
  } = useDerivAPI();

  const [digitHistory, setDigitHistory] = useState<number[]>([]);
  const [digitAnalysis, setDigitAnalysis] = useState({
    even: 0,
    odd: 0,
    over: 50,
    under: 50,
    matches: 0,
    differs: 0,
  });

  const currentPrice = tickData?.quote || null;

  // Update digit analysis when new tick data arrives
  useEffect(() => {
    if (tickData && tickData.quote) {
      const lastDigit = Math.floor(tickData.quote * 10000) % 10;
      
      setDigitHistory(prev => {
        const newHistory = [...prev, lastDigit].slice(-100); // Keep last 100 digits
        
        // Calculate analysis
        const evenCount = newHistory.filter(digit => digit % 2 === 0).length;
        const oddCount = newHistory.length - evenCount;
        const overCount = newHistory.filter(digit => digit >= 5).length;
        const underCount = newHistory.length - overCount;
        
        let matchesCount = 0;
        let differsCount = 0;
        for (let i = 1; i < newHistory.length; i++) {
          if (newHistory[i] === newHistory[i - 1]) {
            matchesCount++;
          } else {
            differsCount++;
          }
        }

        setDigitAnalysis({
          even: newHistory.length > 0 ? Math.round((evenCount / newHistory.length) * 100) : 50,
          odd: newHistory.length > 0 ? Math.round((oddCount / newHistory.length) * 100) : 50,
          over: newHistory.length > 0 ? Math.round((overCount / newHistory.length) * 100) : 50,
          under: newHistory.length > 0 ? Math.round((underCount / newHistory.length) * 100) : 50,
          matches: matchesCount,
          differs: differsCount,
        });
        
        return newHistory;
      });
    }
  }, [tickData]);

  // Subscribe to default symbol on connection
  useEffect(() => {
    if (isConnected) {
      subscribeTo('R_10'); // Volatility 10 Index
    }
  }, [isConnected, subscribeTo]);

  const value: TradingContextType = {
    isConnected,
    isAuthorized,
    currentPrice,
    balance,
    portfolio,
    subscribeTo,
    buyContract,
    sellContract,
    tickData,
    digitAnalysis,
  };

  return (
    <TradingContext.Provider value={value}>
      {children}
    </TradingContext.Provider>
  );
};

export const useTrading = () => {
  const context = useContext(TradingContext);
  if (context === undefined) {
    throw new Error('useTrading must be used within a TradingProvider');
  }
  return context;
};