from binance.client import Client
import config

class TradingBot:
    def __init__(self):
        self.client = Client(config.API_KEY, config.API_SECRET)
        self.positions = {}
        self.settings = {
            "trade_quantity": config.TRADE_QUANTITY,
            "rsi_period": config.RSI_PERIOD,
            "rsi_overbought": config.RSI_OVERBOUGHT,
            "rsi_oversold": config.RSI_OVERSOLD
        }

    def get_market_data(self):
        prices = self.client.get_all_tickers()
        return {price['symbol']: price['price'] for price in prices}

    def get_positions(self):
        return self.positions

    def execute_trade(self, side, symbol, quantity):
        try:
            order = self.client.create_order(symbol=symbol, side=side, type='MARKET', quantity=quantity)
            return {"status": "success", "order": order}
        except Exception as e:
            return {"status": "error", "message": str(e)}

    def update_settings(self, new_settings):
        self.settings.update(new_settings)
