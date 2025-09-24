class DerivAPI {
  private ws: WebSocket | null = null;
  private token: string;
  private appId: string;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private listeners: Map<string, Function[]> = new Map();

  constructor(token: string, appId: string) {
    this.token = token;
    this.appId = appId;
  }

  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const wsUrl = `wss://ws.derivws.com/websockets/v3?app_id=${this.appId}`;
        this.ws = new WebSocket(wsUrl);

        this.ws.onopen = () => {
          console.log('Connected to Deriv WebSocket');
          this.reconnectAttempts = 0;
          this.authorize();
          resolve();
        };

        this.ws.onmessage = (event) => {
          const data = JSON.parse(event.data);
          this.handleMessage(data);
        };

        this.ws.onclose = () => {
          console.log('Deriv WebSocket connection closed');
          this.reconnect();
        };

        this.ws.onerror = (error) => {
          console.error('Deriv WebSocket error:', error);
          reject(error);
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  private async reconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      console.log(`Reconnecting... Attempt ${this.reconnectAttempts}`);
      setTimeout(() => this.connect(), 1000 * this.reconnectAttempts);
    }
  }

  private authorize() {
    if (this.ws && this.token) {
      this.send({
        authorize: this.token,
      });
    }
  }

  private handleMessage(data: any) {
    const { msg_type, req_id } = data;
    
    // Emit to specific listeners
    const listeners = this.listeners.get(msg_type) || [];
    listeners.forEach(listener => listener(data));

    // Handle specific message types
    switch (msg_type) {
      case 'authorize':
        console.log('Authorization successful:', data);
        this.emit('authorized', data);
        break;
      case 'tick':
        this.emit('tick', data);
        break;
      case 'candles':
        this.emit('candles', data);
        break;
      case 'balance':
        this.emit('balance', data);
        break;
      case 'portfolio':
        this.emit('portfolio', data);
        break;
      default:
        break;
    }
  }

  send(data: any): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    } else {
      console.error('WebSocket is not connected');
    }
  }

  // Subscribe to tick data
  subscribeTicks(symbol: string) {
    this.send({
      ticks: symbol,
      subscribe: 1,
    });
  }

  // Subscribe to candles
  subscribeCandles(symbol: string, granularity: number = 60) {
    this.send({
      ticks_history: symbol,
      adjust_start_time: 1,
      count: 1000,
      end: 'latest',
      granularity,
      style: 'candles',
      subscribe: 1,
    });
  }

  // Get account balance
  getBalance() {
    this.send({
      balance: 1,
      subscribe: 1,
    });
  }

  // Get portfolio
  getPortfolio() {
    this.send({
      portfolio: 1,
      subscribe: 1,
    });
  }

  // Buy a contract
  buyContract(contractData: any) {
    this.send({
      buy: 1,
      ...contractData,
    });
  }

  // Sell a contract
  sellContract(contractId: string) {
    this.send({
      sell: contractId,
    });
  }

  // Get trading times
  getTradingTimes() {
    this.send({
      trading_times: new Date().toISOString().split('T')[0],
    });
  }

  // Event listener system
  on(event: string, callback: Function) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(callback);
  }

  off(event: string, callback: Function) {
    const listeners = this.listeners.get(event) || [];
    const index = listeners.indexOf(callback);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  }

  private emit(event: string, data: any) {
    const listeners = this.listeners.get(event) || [];
    listeners.forEach(listener => listener(data));
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }
}

export default DerivAPI;