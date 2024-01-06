# Container for portainer

Portainer.io is an open-source tool for managing containerized applications. It provides a user-friendly interface that allows you to manage your Docker containers, images, networks, volumes, and more. It simplifies complex tasks such as managing networks or maintaining containers, making these tasks accessible to developers without deep knowledge of Docker commands. Portainer supports Docker, Docker Swarm, and Kubernetes environments. It can be run as a Docker container itself, making it easy to integrate into any container-based workflow.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Install docker om Raspberry Pi
```
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```
Install Portainer
```
docker volume create portainer_data
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```
Access to portainer is with Raspberry Pi IP followed by port :9000 in my case it was
http://192.168.68.115:9000 and http://192.168.68.103:9000 as i instellad portainer on 2 raspberry pi's


## Usage

Provides a user-friendly interface that allows user to manage Docker containers, images, networks, volumes, and more for project assigment

