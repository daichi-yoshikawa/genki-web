#!/bin/bash

gunicorn --reload 'app:create_app()' -c config_gunicorn.py
