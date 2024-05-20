# Hyrule Compendium (BOTW)

This site provides a fun way to browse an encyclopedia of all the interactive items found in the world of Hyrule, Breath of the Wild.

## Live Demo:

Check it out: <a href="https://hyrule.amandadroy.com">Hyrule Compendium</a>

## Features

- View items by category by using the navigation buttons
- View item details by clicking on something of interest
  - __Detailed info includes:__ common locations, cooking effect, description, dlc, edible, hearts recovered, weapon stats (attack, defense)
- Search by name; includes fuzzy searching for typos and close matches
- Dockerized for seamless production and deployment

## Screenshots:

### Search by Name or ID

<img src="https://github.com/amandadr/hyrule-compendium/blob/master/public/docs/Screenshot_desktop_search.jpg?raw=true" width="900px" height="auto" />

<img src="https://github.com/amandadr/hyrule-compendium/blob/master/public/docs/Screenshot_iPad-search.jpg?raw=true" width="350px" height="auto" />

### List by Category

<img src="https://github.com/amandadr/hyrule-compendium/blob/master/public/docs/Screenshot_desktop-list.jpg?raw=true" width="900px" height="auto" />

<img src="https://github.com/amandadr/hyrule-compendium/blob/master/public/docs/Screenshot_iPad-list.jpg?raw=true" width="350px" height="auto" />

### Learn All About It!

<img src="https://github.com/amandadr/hyrule-compendium/blob/master/public/docs/Screenshot_desktop-entry.jpg?raw=true" width="900px" height="auto" />

<img src="https://github.com/amandadr/hyrule-compendium/blob/master/public/docs/Screenshot_iPad-entry.jpg?raw=true" width="350px" height="auto" />

## API Credit

With major thanks to gadhagod and team for putting together a wonderful API:
https://github.com/gadhagod/Hyrule-Compendium-API

## Getting Started

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/amandadr/hyrule-compendium.git
   cd hyrule-compendium
   ```

2. **Install Docker**

   - Follow the intructions on the ['get Docker' site](https://docs.docker.com/get-docker/).

### Usage

##### Build the Docker image:
```bash
docker build -t hyrule:latest .
```

### 2. Build the Docker container:
```bash
docker run -d -p 4000:80 --name hyrule-compendium hyrule:latest
```

### 3. Find the app at localhost:4000 :)

## Changelog
...
- Updated 2024-03-21: 
  - Integrated a Lambda-hosted fuzzy search function which filters search terms before requesting entries from the API. This allows users to input partial terms or typos and return accurate results!
- Updated 2024-05-19:
  - Dockerized the application.