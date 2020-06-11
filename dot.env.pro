export GUNICORN_HOST=127.0.0.1
export GUNICORN_PORT=8000
export FLASK_SECRET_KEY=$(python -c 'import os; print(os.urandom(128))')
export FLASK_ENV=production
export FLASK_RUN_HOST=127.0.0.1
export FLASK_RUN_PORT=5000
export FLASK_APP=app.py
