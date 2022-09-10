# Description

Gis services are handled.

Use [MapBox](https://www.mapbox.com/) to:

- Directions API
- Geocoding API
- Maps Static API

## Tecnologies

- NodeJS 14.20.0
- NPM 8.18.0
- Yarn 1.22.11

## Development

### Dependencies

- `MAPBOX_API_KEY`

### Install

```bash
yarn install
```

#### Start server

```bash
yarn start
```

## Message error

- `200 Request` - ok
- `400 Bad Request` - for invalid input

## Response

- Example:

```json
{
  "success": true
}
```

### Documentation

#### Access

- [Oficial site](http://localhost:4000/api-docs)

### Testing

#### With jest

- [Oficial site](https://jestjs.io/)
- [Documentation](https://jestjs.io/docs/en/getting-started)
- [API](https://jestjs.io/docs/en/api)
- [Expect](https://jestjs.io/docs/en/expect)

##### All test

```bash
yarn test
```

or

```bash
yarn --watchAll
```

##### Individual test

```bash
yarn test api.main.test.js
yarn test direction.v1.test.js
yarn test geocoding.v1.test.js
```

### Code Quality

#### Sonarqube

- [Oficial site](https://www.sonarqube.org/)

##### Install

###### With docker

```bash
docker pull sonarqube
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube
```

###### Web access

```bash
http://localhost:9000
```

####### Default credencials

- User: admin
- Password: admin

##### Use with docker

```bash
docker pull newtmitch/sonar-scanner

```

###### GNU-Linux/MacOS

Executing

```bash
docker run -ti -v /home/proyectosbeta/development/gis-service:/usr/src --link sonarqube newtmitch/sonar-scanner
```

## Production

### Build

```bash
yarn build
```

Use pm2

### Install

```bash
yarn global add pm2
```

### Use

#### Start an app

```bash
pm2 start dist/bundle.js --name gis-service
```

#### Managing processes

##### Restart

```bash
pm2 restart gis-service
```

##### Reload

```bash
pm2 reload gis-service
```

#### Stop

```bash
pm2 stop gis-service
```

##### Delete

```bash
pm2 delete gis-service
```

#### List managed applications

```bash
pm2 list
```

#### Display logs

```bash
pm2 logs
```

#### Terminal Based Dashboard

```bash
pm2 monit
```

### Cluster mode

For Node.js applications, PM2 includes an automatic load balancer that will share all HTTP[s]/Websocket/TCP/UDP connections between each spawned processes.

```bash
pm2 start app.bundle.js --name gis-service -i max
```

### Setup startup script

```bash
pm2 startup
```
