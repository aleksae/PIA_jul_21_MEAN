import express, { Router } from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import korisnikRouter from './routerts/korisnik.router';
import ostaloRouter from './routerts/ostalo.router';


const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/autoskola2021")
mongoose.connection.once('open', () => {
    console.log("db connection ok")
})
const router = Router()

router.use('/korisnik', korisnikRouter)
router.use('/ostalo', ostaloRouter)
app.use('/', router)


app.listen(4000, () => console.log(`Express server running on port 4000`));