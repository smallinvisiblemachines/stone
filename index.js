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
import Moment from 'moment';

// LIB
import createManifest from './lib/createManifest';

// UTILS
import * as log from './utils/log';

const stone = createManifest();

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
