import os

host = str(os.getenv('GUNICORN_HOST'))
port = str(os.getenv('GUNICORN_PORT'))
bind = host + ':' + port
proc_name = 'nginx-gunicorn-flask'
workers = 1
