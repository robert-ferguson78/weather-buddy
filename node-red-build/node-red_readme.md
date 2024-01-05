# Container for node-red

Node-RED is an open-source programming tool for wiring together hardware devices, APIs, and online services in new and interesting ways. It provides a browser-based flow editor that makes it easy to wire together flows using the wide range of nodes in the palette. Flows can be then deployed to the runtime in a single click.

Node-RED provides a visual interface for programming and is built on Node.js, taking full advantage of its event-driven, non-blocking model. This makes it ideal to run at the edge of the network on low-cost hardware such as the Raspberry Pi as well as in the cloud. With over 225,000 modules in Node's package repository, it is easy to extend the range of palette nodes to add new capabilities.

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Node-red Dasboard Screenshots](#Sreenshots-of-node-red-dashboard)
- [MQTT BRoker set up](#mqtt-broker-setup)

## Installation

### Using Portainer to create a docker container:
Node-Red docker container from DockerHub url: https://hub.docker.com/r/nodered/node-red-docker

#### Portainer create new docker file settings:

- Image (Docker.io): /node-red/node-red-docker
- Always pull the image: On

#### Advanced settings:

Command & logging (settings)
- Console: interactive
- ENV (default variables when container is created)
    - FLOWS: flows.json
    - NODE_PATH: /usr/src/node-red/node_modules:/data/node_modules
    - NODE_RED_VERSION: v3.1.3
    - NODE_VERSION: 16.20.2
    - PATH: /usr/src/node-red/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
    - YARN_VERSION: 1.22.19
- Restart policy: Unless Stopped

Volumns (persistent storage for Node-Red)
- node-red_data: /data

>> [Back to Top](#Table-of-Contents)


## Usage

Node-Red is used in project to pass data from the local mqtt broker to Infuxdb while manipulating the MQTT data feed through functions. Node-Red is used to manipulate 2 feeds for outside-weather-station and indoor-upstairs-landing MQTT feeds.

## Sreenshots of node red dashboard

### Node-red dashboard interface
![MQTT Broker screenshot](../image-assets/readme-images/node-red-dashboard.png)

## MQTT BRoker set up


