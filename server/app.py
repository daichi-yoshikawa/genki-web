import os
from flask import Flask, jsonify, render_template
from flask_cors import CORS


app = Flask(__name__, template_folder=os.path.abspath('./app/templates'),
            static_folder=os.path.abspath('./app/static'))

CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/', methods=['GET'])
def index():
    return jsonify('pong!')
