/*

  write a package that returns a server framework like so:

  stone({
    ...config
  }).start()

  or similar...

  ... should be something you can spool up on a wim with a config file
*/

// example config
const config = {
  title: 'Airstone',
  description: 'a grounded CMS for web apps',
  emoji: 'gem',
  pages: {
    '/about': {
      title: 'About',
      subtitle: 'All about Airstone.'
    }
  }
};

// IMPORTS
// SERVER
import Glue from 'glue';
import Inert from 'inert';
import Vision from 'vision';
import Lout from 'lout';
import Moment from 'moment';

// UTILS
import * as log from './utils/log';

const stone = function(config) {

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

  return {
    ...manifest
  };
};

const splash = async function(stone, config) {
  const options = {
    relativeTo: __dirname
  };

  try {
    const server = await Glue.compose(stone, options);
    await server.start();

    log.welcome(server, config)

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

splash( 
  stone(), 
  config
);
