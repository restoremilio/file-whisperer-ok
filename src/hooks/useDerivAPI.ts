import { useState, useEffect, useCallback, useRef } from 'react';
import DerivAPI from '@/services/derivAPI';

const DERIV_TOKEN = 'hRZhxWuQrFVxZ5j';
const APP_ID = '101924';

export const useDerivAPI = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [tickData, setTickData] = useState<any>(null);
  const [balance, setBalance] = useState<any>(null);
  const [portfolio, setPortfolio] = useState<any>(null);
  const [candles, setCandles] = useState<any[]>([]);
  const apiRef = useRef<DerivAPI | null>(null);

  const connect = useCallback(async () => {
    try {
      if (!apiRef.current) {
        apiRef.current = new DerivAPI(DERIV_TOKEN, APP_ID);
      }

      await apiRef.current.connect();
      setIsConnected(true);

      // Set up event listeners
      apiRef.current.on('authorized', (data: any) => {
        setIsAuthorized(true);
        console.log('User authorized:', data);
      });

      apiRef.current.on('tick', (data: any) => {
        setTickData(data.tick);
      });

      apiRef.current.on('balance', (data: any) => {
        setBalance(data.balance);
      });

      apiRef.current.on('portfolio', (data: any) => {
        setPortfolio(data.portfolio);
      });

      apiRef.current.on('candles', (data: any) => {
        if (data.candles) {
          setCandles(data.candles);
        }
      });

      // Get initial data
      apiRef.current.getBalance();
      apiRef.current.getPortfolio();

    } catch (error) {
      console.error('Failed to connect to Deriv API:', error);
      setIsConnected(false);
    }
  }, []);

  const subscribeTo = useCallback((symbol: string) => {
    if (apiRef.current && isConnected) {
      apiRef.current.subscribeTicks(symbol);
      apiRef.current.subscribeCandles(symbol);
    }
  }, [isConnected]);

  const buyContract = useCallback((contractData: any) => {
    if (apiRef.current && isAuthorized) {
      apiRef.current.buyContract(contractData);
    }
  }, [isAuthorized]);

  const sellContract = useCallback((contractId: string) => {
    if (apiRef.current && isAuthorized) {
      apiRef.current.sellContract(contractId);
    }
  }, [isAuthorized]);

  useEffect(() => {
    connect();

    return () => {
      if (apiRef.current) {
        apiRef.current.disconnect();
      }
    };
  }, [connect]);

  return {
    isConnected,
    isAuthorized,
    tickData,
    balance,
    portfolio,
    candles,
    subscribeTo,
    buyContract,
    sellContract,
    api: apiRef.current,
  };
};