# Container for influxdb

InfluxDB is an open-source time series database developed by InfluxData. It is written in Go and optimized for fast, high-availability storage and retrieval of time series data in fields such as operations monitoring, application metrics, Internet of Things sensor data, and real-time analytics.

InfluxDB supports a SQL-like query language for interacting with data. It's designed to handle high write and query loads and provides a feature-rich query language for interacting with the data.

Key features of InfluxDB include:

Time Series Data Storage: InfluxDB is designed to store time-stamped data, making it useful for tracking changes over time.

Data Compression: InfluxDB compresses data to save storage space.

Continuous Queries: InfluxDB can compute and store query results automatically and periodically.

RetentionPolicy: InfluxDB automatically deletes old data that is no longer needed.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Instructions on how to install and set up the project.

## Usage

Inlfuxdb is used in this project assingment to store reading data by date for the outside-weather-station and indoor reading board sensors as seperate buckets to be queried in this case by Grafana appication, to build dashboard to visualise reading data collected over time.