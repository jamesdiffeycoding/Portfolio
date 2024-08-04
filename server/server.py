from flask import Flask, jsonify
from flask_cors import CORS  # allow requests from other servers
from bs4 import BeautifulSoup  # scrape website
import requests

# app instance
app = Flask(__name__)
CORS(app)


def fetch_site_data(url):
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()  # Raise an exception for HTTP errors
        soup = BeautifulSoup(response.content, "html.parser")
        specific_touch = soup.findAll("div")
        if specific_touch:
            return {"message": "success", "touch_found": True}
        else:
            return {"message": "Touch points not found", "touch_found": False}
    except requests.exceptions.RequestException as e:
        return {"message": str(e), "touch_found": False}
    except Exception as e:
        return {"message": str(e), "touch_found": False}


@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({"message": "Hello world!"})


@app.route("/api/ruby", methods=["GET"])
def ruby_home():
    return jsonify(
        fetch_site_data("https://rubyonrails-pokedex.onrender.com/pokemonsters")
    )


@app.route("/api/quizzer", methods=["GET"])
def quizzer_home():
    return jsonify(fetch_site_data("https://night-quizzer.vercel.app/"))


@app.route("/api/shelter", methods=["GET"])
def shelter_home():
    return jsonify(
        fetch_site_data("https://secure-nextjs-homeless-shelter-database.vercel.app/")
    )


@app.route("/api/mathemagical", methods=["GET"])
def mathemagical_home():
    return jsonify(fetch_site_data("https://mathemagical.vercel.app/"))


@app.route("/api/awesun", methods=["GET"])
def awesun_home():
    return jsonify(fetch_site_data("https://awesun-solar-visualiser.vercel.app/"))


if __name__ == "__main__":
    #  app.run(debug=True, port=8080)  # DEVELOPER MODE DEBUG HELP
    app.run()  # FOR PRODUCTION ONLY
