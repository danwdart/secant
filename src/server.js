import express from 'express';
import http from 'http';
import sessions from 'client-sessions';
import bodyParser from 'body-parser';

// db setup
//import db from './lib/db';

let app = express(),
    server = http.Server(app),
    port = ('undefined' === typeof process.env.PORT)?
        '3000':
        process.env.PORT,
    ip = ('undefined' === typeof process.env.IP)?
        '0.0.0.0':
        process.env.IP,
    // for docker
    dbhost = ('undefined' === typeof process.env.MONGO_PORT_27017_TCP_ADDR)?
        'localhost':
        process.env.MONGO_PORT_27017_TCP_ADDR;

//db(dbhost);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* just in case
app.set('views', __dirname + '/../src/public');
app.set('view engine', 'pug');
*/

app.use(express.static(__dirname + '/../public'));

app.use(sessions({
    cookieName: 'session',
    secret: 'YouShouldProbablyReplaceThisBecauseItsASecurityRisk',
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5,
    httpOnly: true,
    ephemeral: false
}));

//routes(app);

process.on('SIGINT', () => {
    console.log('SIGINT caught, exiting...');
    server.close(() => process.exit());
});

server.listen(
    port,
    ip,
    () => console.log('Listening on port', port, 'on IP', ip)
);
