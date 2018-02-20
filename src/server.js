const DeepstreamServer = require('deepstream.io');
const C = DeepstreamServer.constants;

const server = new DeepstreamServer("conf/config.yml");

server.start();

