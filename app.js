const httpServer = require('./connection/http');
const Node = require('./services/node.class');

//TODO:: manage port from config
(async () => {
try {
    httpServer.listen(3000, function () {
    console.log(
        `Server listening to the port 3000`,
    );
    });
} catch (error) {
    console.log(`Server listen error `, error);
}
})();

//Create defalut root node 
global.rootNode = new Node(' ');

process
.on('unhandledRejection', (reason, p) => {
    console.error(
    reason,
    'Unhandled Rejection at Promise >> ',
    new Date(),
    ' >> ',
    p,
    );
})
.on('uncaughtException', (err) => {
    console.error(
    'Uncaught Exception thrown',
    new Date(),
    ' >> ',
    '\n',
    err,
    );
});
