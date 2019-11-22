const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://SandhuNarinder:Sandhu@89@cluster0-xrjvs.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbURI,{dbName:'bookDB',useNewUrlParser: true });
mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', err => {
console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});
const gracefulShutdown = (msg, callback) => {
mongoose.connection.close( () => {
console.log(`Mongoose disconnected through ${msg}`);
callback();
});
};
process.once('SIGUSR2', () => {
gracefulShutdown('nodemon restart', () => {
process.kill(process.pid, 'SIGUSR2');
});
 });

require('./book');