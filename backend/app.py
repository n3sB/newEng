from flask import Flask, jsonify, request
from trading_bot import TradingBot

app = Flask(__name__)
bot = TradingBot()

@app.route('/api/market-data', methods=['GET'])
def get_market_data():
    data = bot.get_market_data()
    return jsonify(data)

@app.route('/api/positions', methods=['GET'])
def get_positions():
    return jsonify(bot.get_positions())

@app.route('/api/trade', methods=['POST'])
def execute_trade():
    payload = request.json
    side = payload.get("side")
    symbol = payload.get("symbol")
    quantity = payload.get("quantity")
    result = bot.execute_trade(side, symbol, quantity)
    return jsonify(result)

@app.route('/api/settings', methods=['POST'])
def update_settings():
    payload = request.json
    bot.update_settings(payload)
    return jsonify({"status": "Settings updated successfully"})

if __name__ == '__main__':
    app.run(debug=True)
