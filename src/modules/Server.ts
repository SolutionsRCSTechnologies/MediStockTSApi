import App from './ServerConfig';
import * as express from 'express';
import { Router } from './Router';

class Server{
    public app:App;
    public exp:express.Express;
    public portConfig:any;
    public route:Router;
    constructor(){
        this.app = new App();
        this.exp = this.app.exp;
        this.app.SetServerConfig();
        this.portConfig = this.app.GetPortConfiguration();
        this.route = new Router();
    }

    StartServer(){
        this.route.SetRoutingConfiguration(this.exp).listen(this.portConfig.port, function(){
            console.log("The app server is running.");
        });
    }
}

export default new Server();