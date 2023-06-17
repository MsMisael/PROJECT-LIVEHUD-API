
import { Express } from 'express'
import { engine } from 'express-handlebars';


export default function configHandlebars(server: Express) {
    server.engine('handlebars', engine());
    server.set('view engine', 'handlebars');
    server.set('views', './src/views');
}