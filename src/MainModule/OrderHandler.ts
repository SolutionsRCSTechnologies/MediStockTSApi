import { DBHelper } from '../DBModule/DBHelper';
import { Utility } from '../CommonModule/Utilities';
import { CustomResponse } from '../CommonModule/Entities';

class OrderHandler{
    private helper:DBHelper;
    private util: Utility;
    constructor(){
        this.helper = new DBHelper();
        this.util = new Utility();
    }

    GetOrders(){
        console.log("handler entry");
        let orders = this.helper.GetOrders();
        console.log(orders);
        let output:CustomResponse;
        if(orders == null){
            output = this.util.SetResponse(null, "No data found. Sorry!", false, 200);
        } else {
            output = this.util.SetResponse(orders, "", true, 200);
        }
        return output;
    }

}

export { OrderHandler };