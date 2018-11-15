// add a route that serves dynamic pages that the user added

exports.plugin = {
  pkg: {
    name: 'dynamic-pages-route',
    version: '1.0.0'
  },
  register: function(server, options, next) {

    server.route({
      method: 'GET',
      path: '/pages/{param*}',
      handler: function(request, reply) {
        // for a request, fetch a DB model based on the param
        // render a relevant template, and provide the page
      }
    });

    server.route({
      method: 'POST',
      path: '/api/pages/{param*}',
      handler: function(request, reply) {
        // to add a page, we take a POST request with some payload.
        // that payload is the information we want to display on the page,
        // and maybe some other refs, like a desired page template.

        // we add a model to the database that will later provide this on request.
      }
    });

  }
};