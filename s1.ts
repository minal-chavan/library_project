const Hapi = require('hapi');
//var Logger = require('./utils/logger');

//var log = new Logger('server');

const Routes = require('./router/r1.js');

const server = new Hapi.Server();

//var ItemFactory = require('./factory/item_factory');

var hapiSequelize = require('hapi-sequelize');

server.connection({port: 8086, host: 'localhost'});

server.route(Routes);

server.start(function (err) {
    if (err) {
        throw err;
    }
  //  var item = new ItemFactory();
    console.log('Server is running at:' + server.info.uri);
});


server.register([
    {
        register: hapiSequelize,
        Sequelize: require('./models')
    }
]);

