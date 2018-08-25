class CustomResponse{
    public Status:number = 200;
    public Data:any = {};
    public Message:any = {"message":"This is default message"};
    public DefaultMessage:any = {"message":"This is default message"};
    public HasData:boolean = false;
    public Content_Type:any = {"Content-Type":"application/json"};
    public Content_Type_Msg:any = {"Content-Type":"plain/text"};
}





export { CustomResponse };