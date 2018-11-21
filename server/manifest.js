// IMPORTS
import Inert from 'inert';
import Vision from 'vision';

export default function manifest(config) {
  // PORT
  // we will assume a .env file
  let port = process.env.PORT || 3000;
  if (config.port) {
    port = config.port;    
  }

  // CORE
  // core modules
  const modules = [
    Inert,
    Vision
  ];

  // AUTH
  // add all our authentication strategies
  let auths = [];

  // STATIC ASSETS
  // asset routes serve static assets and html files
  const assets = [
    './server/api/assets.js'
  ];

  // API 
  // api routes
  const api = [
    './server/api/pages.js'
  ];

  // LOGGING
  // logging configuration
  const consoleReporter = [
    {
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{
        error: '*',
        log: '*',
        request: '*',
        response:'*'
      }]
    },
    {
      module: 'good-console',
      args: [{
        color: {
          $filter: 'env',
          production: false,
          $default: true
        }
      }]
    },
    'stdout'
  ];

  const reporters = {
    consoleReporter
  };

  const logs = [
    {
      plugin: 'good',
      options: {
        reporters
      }
    }
  ];

  // DB
  // configuration for our database(s)
  // const db = [{
  //   plugin: 'hapi-mongoose',
  //   options: {
  //     url: 'mongodb://127.0.0.1:27017',
  //     promises: 'native',
  //     mongooseOptions: {
  //       dbName: 'test',
  //     },
  //   },
  // }];

  // MANIFEST
  // assemble our previous variables into a server manifest
  const base = [];
  const plugins = base.concat(
    modules,
    auths,
    assets,
    logs,
    db,
    api
  );

  // return our full manifest
  return {
    server: {
      port
    },
    register: {
      plugins
    }
  };

};




