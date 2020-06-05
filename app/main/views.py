from flask import render_template

from . import main


@main.route('/', methods=['GET'])
def main():
    return render_template('main.html')
