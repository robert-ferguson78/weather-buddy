# Container for grafana

Grafana is an open-source platform for monitoring and observability. It allows you to query, visualize, alert on, and understand your metrics no matter where they are stored. In other words, you can create, explore, and share dashboards with your team and foster a data-driven culture.

Key features of Grafana include:

Visualizations: Grafana provides a variety of ways to visualize data, including graphs, histograms, heatmaps, and more.

Alerts: You can create alerting rules for your data and get notified through various channels.

Datasources: Grafana supports a wide range of databases, including but not limited to InfluxDB, Prometheus, Elasticsearch, MySQL, and PostgreSQL.

Annotations: You can annotate your graphs with log events, deployments, or any other event data from your systems.

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

---

## Installation

### Using Portainer to create a docker container:
Grafana docjer container from DockerHub url: https://hub.docker.com/r/grafana/grafana

#### Portainer create new docker file settings:

Image (Docker.io): grafana:latest
Always pull the image: On

#### Advanced settings:

Command & logging (settings)
- Console: interactive
- ENV (enviornment variables to pass to container)
    - GF_AUTH_ANONYMOUS_ENABLED: true (allows anonymous user access to dashboard)
    - GF_AUTH_ANONYMOUS_ORG_NAM: weather-buddy
    - GF_AUTH_ANONYMOUS_ORG_ROLE: Viewer
    - GF_PANELS_DISABLE_SANITIZE_HTML: true
    - GF_PATHS_CONFIG: /etc/grafana/grafana.ini
    - GF_PATHS_DATA: /var/lib/grafana   
    - GF_PATHS_HOME: /usr/share/grafana
    - GF_PATHS_LOGS: /var/log/grafana
    - GF_PATHS_PLUGINS: /var/lib/grafana/plugins
    - GF_PATHS_PROVISIONING: /etc/grafana/provisioning
    - GF_SECURITY_ALLOW_EMBEDDING: true (this allows iframe which is disallowed by default)
    - GF_SECURITY_COOKIE_SAMESITE: disabled (this allows iframe which is disallowed by default)
- Restart policy: Unless Stopped

---

## Usage

Grafana is used in this project assignment to visualise data that comes from the infuxdb, Emoji's are used in the grafana titel's and also data from Influxdb for visual icons, for example the emoji's ⬇ ↘ ⬆ ↗ ➞ ↖ ↙ ← are used to visually show wind direction in the dashboard

Emoji's were sourced from below link (seranc for emoji's) 
https://emojidb.org/scale-emojis?

There are 2 distinct data sources displayed in Grafana which are outside weather data and inside weather data which are overlayed to show differences for example temperature outside vs temperatire inside (goal would be to add in more data sources inside to build out this dashboard - not achievable in current time frame of assignment).
