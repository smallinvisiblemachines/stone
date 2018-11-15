exports.plugin = {
  pkg: {
    name: 'assets-route',
    version: '1.0.0'
  },
  register: function(server, options, next) {
    
    // serve index
    server.route({
      method: 'GET',
      path: '/',
      options: {
        plugins: {
          lout: false
        },
        handler: function(request, h) {
          return h.file('./build/index.html');
        }
      }
    });

    // serve our bundle
    server.route({
      method: 'GET',
      path: '/bundle.js',
      options: {
        plugins: {
          lout: false
        },
        handler: function(request, h) {
          return h.file('./build/bundle.js');
        }
      }
    });

    // all other assets
    server.route({
      method: 'GET',
      path: '/assets/{param*}',
      options: {
        plugins: {
          lout: false
        },
        handler: {
          directory: {
            path: 'build',
            index: ['index.html']
          }
        }
      }
    });

  }
}