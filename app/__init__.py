import os
from flask import Flask
from config import config


def create_app():
    app = Flask(__name__)
    flask_env = os.getenv('FLASK_ENV') or 'default'
    app.config.from_object(config[flask_env])
    app.config.from_object(config[flask_env])
    config[flask_env].init_app(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint, url_prefi='/')

    return app
