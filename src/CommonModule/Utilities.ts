import { CustomResponse } from "./Entities";

class Utility{

    SetResponse(data:any, msg:string, hasData: boolean, status: number){
        let output = new CustomResponse();
        output.Status = status;
        output.HasData = hasData;
        if(hasData){
            output.Data = data;
        } else{
            output.Message = msg;
        }
        return output;
    }

    SendResponse(output:CustomResponse, response:any){
        if(response == null)
            return null;
        if(output == null)
            return response.end();

        if(output.HasData){
            response.writeHead(output.Status,output.Content_Type);
            if(output.Data != null){
                response.write(JSON.stringify(output.Data));
            } else {
                response.write(JSON.stringify(output.DefaultMessage));
            }
        } else{
            response.writeHead(output.Status, output.Content_Type_Msg);
            response.write(JSON.stringify(output.Message));
        }

        return response.end();
    }


}

export { Utility };