"use strict";

const versionSystem = process.env.npm_package_version;
const swagger = {
  openapi: "3.0.3",
  info: {
    title: "API Gis",
    description: "The API REST GIS Service",
    version: versionSystem,
    contact: {
      email: "josego85@gmail.com",
    },
    license: {
      name: "GPLv3",
      url: "https://opensource.org/licenses/GPL-3.0",
    },
  },
  servers: [
    {
      url: "http://localhost:4000/api",
      description: "Development server,",
    },
  ],
  paths: {
    "/": {
      get: {
        description: "Welcome to the API REST (gis-service)",
        summary: "Welcome to the API REST",
        parameters: [
          {
            in: "header",
            name: "accept-language",
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Return a welcome",
          },
          429: {
            description: "Too many requests, please try again later.",
          },
        },
      },
    },
    "/geocoding/v1/forward/{place}": {
      get: {
        description: "Geocoding",
        summary: "Geocoding",
        parameters: [
          {
            in: "header",
            name: "accept-language",
            schema: {
              type: "string",
            },
          },
          {
            in: "path",
            name: "place",
            description: "The place",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Return a plces",
          },
          422: {
            description: "Internal Error",
          },
          429: {
            description: "Too many requests, please try again later.",
          },
        },
      },
    },
    "/direction/v1/{profile}/{longitude1}/{latitude1}/{longitude2}/{latitude2}":
      {
        get: {
          description: "The direction",
          parameters: [
            {
              in: "header",
              name: "accept-language",
              schema: {
                type: "string",
              },
            },
            {
              in: "path",
              name: "profile",
              description: "The profile description",
              required: true,
              schema: {
                type: "string",
              },
            },
            {
              in: "path",
              name: "longitude1",
              description: "The longitude for the point 1",
              required: true,
              schema: {
                type: "integer",
              },
            },
            {
              in: "path",
              name: "latitude1",
              description: "The latitude for the point 1",
              required: true,
              schema: {
                type: "integer",
              },
            },
            {
              in: "path",
              name: "longitude2",
              description: "The longitude for the point 2",
              required: true,
              schema: {
                type: "integer",
              },
            },
            {
              in: "path",
              name: "latitude2",
              description: "The latitude for the point 2",
              required: true,
              schema: {
                type: "integer",
              },
            },
          ],
          responses: {
            200: {
              description: "Return the direction routing",
            },
            422: {
              description: "Internal Error",
            },
            429: {
              description: "Too many requests, please try again later.",
            },
          },
        },
      },
  },
  components: {},
  tags: [],
};

export { swagger };
