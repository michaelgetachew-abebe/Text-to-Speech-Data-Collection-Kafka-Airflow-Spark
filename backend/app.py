import logging
import os
from json import dumps, loads
import uuid
from flask import Flask, app, jsonify, request
from flask_cors import CORS, cross_origin
from kafka import KafkaConsumer, KafkaProducer
import kafka
from waitress import serve

app = Flask(__name__)
cors = CORS(app)

TEXT = "spark-transformed-text"
TEXT_AUDIO = "text.audio.pair"
BROKER_ADDRESS = 'localhost:29092'

try:
        producer = KafkaProducer(bootstrap_servers=BROKER_ADDRESS,
                                 value_serializer=lambda x: dumps(x).encode('utf-8'))
        consumer = KafkaConsumer(TEXT,
                                 bootstrap_servers=BROKER_ADDRESS,
                                 auto_offset_reset='earliest',
                                 enable_auto_commit=False,
                                 value_deserializer=lambda x: loads(x.decode('utf-8')))
except kafka.errors.NoBrokersAvailable:
        print("NoBrokersAvailable")
@app.route('/')

def hello():
    return '<h1>Successfully Dockerized Flask</h2>'

@app.route('/get-text', methods=["GET"])
def generate_text():
        print("sending text")
        try:
            for s in consumer:
                print(s.value)
                article = s.value
                return jsonify(text=article)
        except NameError:
            print("Consumer not init")
            return 404

@app.route('/send-audio', methods=["POST"])
def post_recording():
        audio = request.files['audio']
        article = audio.filename
        #audio = extract_audio(audio)
        print(audio.shape)
        audio = audio.tolist()
        id = uuid.uuid1()
        data = {
            "id": id,
            "article": article,
            "audio": audio
        }
        try:
            res = producer.send(TEXT_AUDIO, value=data)
            print(res)
        except NameError:
            print("Producer not created")

        # pprint(data)

        return "200"

if __name__ == "__main__":
    app.run(debug=True)