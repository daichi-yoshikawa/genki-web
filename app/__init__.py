import os
from flask import Flask
from flask_assets import Bundle, Environment
from config import config


def create_app():
    app = Flask(__name__)
    flask_env = os.getenv('FLASK_ENV') or 'default'
    app.config.from_object(config[flask_env])
    app.config.from_object(config[flask_env])
    config[flask_env].init_app(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint, url_prefi='/')

    bundles = {
      'css_head': Bundle(
        'vendors/bootstrap-4.5.0-dist/css/bootstrap.min.css',
        'vendors/bootstrap-select-1.13.14/dist/css/bootstrap-select.min.css',
        'css/variable.css',
        'css/shared_style.css',
        'css/style.css',
        output="gen/css_head.css",
      ),
      'js_head': Bundle(
        'vendors/jquery-3.5.1/jquery-3.5.1.min.js',
        'vendors/popper-1.16.1/popper.min.js',
        'vendors/bootstrap-4.5.0-dist/js/bootstrap.bundle.min.js',
        'vendors/bootstrap-select-1.13.14/dist/js/bootstrap-select.min.js',
        'vendors/vue.js-2.6.11/vue.min.js',
        'vendors/vue-router.js-3.3.2/vue-router.js',
        'vendors/vue-clipboard2-0.3.1/dist/vue-clipboard.min.js',
        'vendors/fontawesome-5.13.0/all.js',
        'assets/shared_utils.js',
        output="gen/js_head.js",
        filters="jsmin"
      ),
    }

    assets = Environment(app)
    assets.register(bundles)

    return app
