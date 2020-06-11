export GUNICORN_HOST=0.0.0.0
export GUNICORN_PORT=5000
export FLASK_SECRET_KEY=$(python -c 'import os; print(os.urandom(128))')
