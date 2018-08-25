import { Utility } from '../CommonModule/Utilities';
import { CustomResponse } from '../CommonModule/Entities';
import { OrderHandler } from '../MainModule/OrderHandler';
import * as express from 'express';

class Router{
    SetRoutingConfiguration(app:express.Express){
        app.get('/',function(req,res){
            let output = new CustomResponse();
            let util = new Utility();
            util.SendResponse(output, res);
        });
        app.get('/order/list',function(req,res){
            console.log("get entry");
            let output = new OrderHandler().GetOrders();
            let util = new Utility();
            console.log(output);
            util.SendResponse(output, res);
        });

        return app;
    }
}

export { Router };