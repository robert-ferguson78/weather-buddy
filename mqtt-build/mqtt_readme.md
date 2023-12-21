# Container for mqtt

MQTT (Message Queuing Telemetry Transport) is a lightweight, publish-subscribe network protocol that transports messages between devices. It is designed for high-latency or unreliable networks.

In MQTT, a central broker handles all messages. Devices, or "clients", connect to this broker and subscribe to topics they are interested in. When a message is published to a topic, the broker forwards the message to all clients who have subscribed to that topic.

MQTT supports three levels of Quality of Service (QoS) for message delivery:

"At most once", where messages are delivered according to the best efforts of the operating environment. Message loss can occur.
"At least once", where messages are assured to arrive but duplicates can occur.
"Exactly once", where message are assured to arrive exactly once. This is the safest but slowest option.
In your project, MQTT could be used for real-time data transmission from various sensors or devices to a central server or between components of your application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Instructions on how to install and set up the project.

## Usage

MQTT is used in this project to send data from sensors in Enviro weather and indoor boards to the MQTT brooker to 2 topics (this data is then subscribed to and process by other applications in this project assignment).