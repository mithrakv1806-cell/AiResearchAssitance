from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/research", methods=["POST"])
def research():
    topic = request.json.get("topic", "").strip()

    return jsonify({
        "researcher": f"Researching: {topic}",
        "writer": f"Summary about: {topic}",
        "reviewer": "Check facts and verify reliable sources.",
        "status": "Demo completed",
        "warning": "Please verify facts manually."
    })

if __name__ == "__main__":
    app.run(debug=True)