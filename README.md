# Koko-dashboard

Koko-dashboard is a simple, easy-to-use homelab homepage that allows you to manage all of your Docker containers in one centralized place.

With Koko-dashboard, you can easily add all of your Docker containers to a simple YAML file and then access all of your apps from one convenient location. Additionally, Koko-dashboard allows you to easily view the status of your containers and to perform basic actions such as pausing, starting, stopping, and restarting them.

<p align="center" style="margin-bottom: 0px !important;">
  <img width="800" src="https://github.com/matandomuertos/koko-dashboard/blob/main/screenshot.png" alt="Screenshot" align="center">
</p>

## Deploy using docker compose
1. Clone this repo: `git clone https://github.com/matandomuertos/koko-dashboard.git`
2. Edit [samples-urls.yaml](https://github.com/matandomuertos/koko-dashboard/blob/main/sample-urls.yml) with your apps and containers
3. Run [docker compose](https://docs.docker.com/compose/): `docker compose up -d`

## Configuration
Koko-dashboard uses a YAML file to manage and display the apps on the homepage. The file is organized into categories, with each category containing a list of apps.

Each app is represented by a series of key-value pairs, including:

- title: The name of the app as it will be displayed on the homepage
- url: The URL that the app can be accessed from
- image(optional): The image URL of the app as it will be displayed on the homepage
- containerName: The name of the container in Docker that the app is running on

Here is an example of a YAML file:
```
Movies&Series: 
  - title: WebMovie
    url: https://example.com/card1
    image: https://www.freepnglogos.com/uploads/logo-website-png/logo-website-file-globe-icon-svg-wikimedia-commons-21.png
    containerName: movies
  - title: WebSeries
    url: https://example.com/card2
    image: https://image.similarpng.com/very-thumbnail/2020/05/Solutions-website-logo-png.png
    containerName: series

Monitoring: 
  - title: Graph
    url: https://example.com/card4
    containerName: graph

Others: 
  - title: Web
    url: https://example.com/card5
    containerName: web1
```
You can add as many categories and apps as you want. Once you've created your YAML file, you can use it to configure Koko-dashboard and easily manage and access all of your apps from one convenient location.

Please note that the YAML file must be mounted in the frontend Docker container at the path `/usr/share/nginx/html/config/urls.yml` in order for Koko-dashboard to read and display the apps correctly.
You can also check the [sample-urls.yaml](https://github.com/matandomuertos/koko-dashboard/blob/main/sample-urls.yml) for more details about the file structure.
