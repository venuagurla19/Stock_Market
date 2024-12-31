from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

# Sample stock data API (you can replace it with any live API or your custom logic)
STOCK_API_URL = "https://finnhub.io/api/v1/quote"
API_KEY = "your_api_key_here"  # You can get an API key from https://finnhub.io/

@app.route('/')
def hello_world():
    return 'Stock API is running!'

@app.route('/stock/<symbol>', methods=['GET'])
def get_stock_data(symbol):
    """Fetch stock data from an external API."""
    url = f"{STOCK_API_URL}?symbol={symbol}&token={API_KEY}"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return jsonify({
            'symbol': symbol,
            'current_price': data.get('c', 'N/A'),
            'high_price': data.get('h', 'N/A'),
            'low_price': data.get('l', 'N/A'),
            'open_price': data.get('o', 'N/A'),
            'previous_close': data.get('pc', 'N/A')
        })
    else:
        return jsonify({"error": "Unable to fetch stock data"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
