// IMPORTS
import Glue from 'glue';
import Inert from 'inert';
import Vision from 'vision';
import Lout from 'lout';

export default function createManifest(config) {

  // we will assume a .env file
  const port = process.env.PORT || 3000;

  // core modules
  const modules = [
    Inert,
    Vision
  ];

  // authentication strategies
  const auths = [];

  // asset routes serve static assets and html files
  const assets = [];

  // api routes
  const api = [];

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

  // MANIFEST
  const base = [];
  const plugins = base.concat(
    modules,
    auths,
    assets,
    logs,
    api
  );

  const manifest = {
    server: {
      port
    },
    register: {
      plugins
    }
  };

  return manifest;
};