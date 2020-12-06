import * as express from "express"

import bodyParser = require('body-parser');
import cors = require("cors")
import mongoose = require('mongoose')
import * as session from "express-session";
/* const mongoDbStore = require('connect-mongodb-session')(session);
import cookieParser from "cookie-parser"; */
import {postRouter,accountRouter} from "./routes"

const app:any = express();
const port:number = 5000;
const ConnectionString:string = "mongodb+srv://okan154:8318913@cluster0.5ovoq.mongodb.net/mern-project?retryWrites=true&w=majority"

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(postRouter);
app.use(accountRouter);
/* const store = new mongoDbStore({
    uri:ConnectionString,
    collection:"sessions"
})
app.use(session({
    secret:"SPACE_CATS_ARE_AWESOME",
    store:store,
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:3600000}
})) */

mongoose.connect(ConnectionString,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        app.listen(port,()=>console.log('App Started'))
    })
    .catch(err=>console.log(err))
