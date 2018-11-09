// IMPORTS
import Glue from 'glue';

// UTILS
import log from '../utils/log';

const start = async function(manifest, options) {
  try {
    const server = await Glue.compose(
      manifest, 
      options
    );

    await server.start();

    log.welcome(server, config);
  
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default start;