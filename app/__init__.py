import os
from flask import Flask
from config import config


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config['default'])
    config['default'].init_app(app)

    from .main import main as main_blueprint

    app.register_blueprint(main_blueprint, url_prefi='/')

    return app
