import * as express from 'express';
import * as bodyParser from 'body-parser';

class App{
    public exp:express.Express;

    constructor(){
        this.exp = express();
        this.SetServerConfig();
    }

    SetServerConfig(){
        //this.exp.use(express.json());
        this.exp.use((req:express.Request,res:express.Response,next:express.NextFunction) :void => {
            console.log("CORS Entry");
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
            next();
            console.log("CORS exit");
        });
        this.exp.use(bodyParser.json());
        this.exp.use(bodyParser.urlencoded({ extended: true }));
    }

    GetPortConfiguration(){
        return {
            port: 3001,
            host: "api.medistock.com"
        };
    }
}

export default App;