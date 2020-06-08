FROM python:3.7.7-slim-buster

WORKDIR /root/app
COPY . .
RUN pip install -r requirements.txt

CMD /bin/bash
