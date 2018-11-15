exports.plugin = {
  pkg: {
    name: 'assets-route',
    version: '1.0.0'
  },
  register: function(server, options, next) {
    
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