'use strict';

// SERVER
import manifest from './server/manifest';
import start from './server/start';

// CONFIG
import config from './config.json';

// START
const dir = {
  relativeTo: __dirname
};

start(
  manifest(config, dir),
  config
);
